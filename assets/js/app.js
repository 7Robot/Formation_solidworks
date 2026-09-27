/**
 * ==============================================================================
 * 7ROBOT ACADEMY - APPLICATION PRINCIPALE
 * Logique LMS, Persistance LocalStorage, Navigation pas à pas & UI Interactive
 * ==============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // ÉTAT GLOBAL DE L'APPLICATION
  // --------------------------------------------------------------------------
  const STATE = {
    currentStepId: null,
    completedSteps: new Set(),
    isDarkMode: true,
    isMobileSidebarOpen: false,
    searchQuery: '',
    userPreviews: {}, // Cache local des aperçus d'images testés par l'utilisateur
    collapsedModules: {} // État des accordéons
  };

  const STORAGE_KEYS = {
    COMPLETED_STEPS: '7robot_completed_steps_v1',
    CURRENT_STEP: '7robot_current_step_v1',
    THEME: '7robot_theme_mode_v1',
    USER_PREVIEWS: '7robot_user_previews_v1'
  };

  // --------------------------------------------------------------------------
  // INITIALISATION
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    loadSavedState();
    setupTheme();
    setupEventListeners();
    setupKeyboardNavigation();
    
    // Déterminer l'étape initiale (depuis le hash de l'URL ou le storage ou la 1ère étape)
    const hash = window.location.hash.replace('#', '');
    const validStep = window.COURSE_STEPS.find(s => s.id === hash);
    
    if (validStep) {
      STATE.currentStepId = validStep.id;
    } else if (!STATE.currentStepId || !window.COURSE_STEPS.some(s => s.id === STATE.currentStepId)) {
      STATE.currentStepId = window.COURSE_STEPS[0].id;
    }

    renderApp();
  });

  // --------------------------------------------------------------------------
  // GESTION DU STOCKAGE LOCAL (LocalStorage)
  // --------------------------------------------------------------------------
  function loadSavedState() {
    try {
      // Étapes terminées
      const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED_STEPS);
      if (savedCompleted) {
        STATE.completedSteps = new Set(JSON.parse(savedCompleted));
      }

      // Dernière étape consultée
      const savedStep = localStorage.getItem(STORAGE_KEYS.CURRENT_STEP);
      if (savedStep) {
        STATE.currentStepId = savedStep;
      }

      // Thème (Dark mode par défaut)
      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
      STATE.isDarkMode = savedTheme !== 'light';

      // Aperçus d'images temporaires
      const savedPreviews = sessionStorage.getItem(STORAGE_KEYS.USER_PREVIEWS);
      if (savedPreviews) {
        STATE.userPreviews = JSON.parse(savedPreviews);
      }
    } catch (e) {
      console.warn('Impossible de charger le LocalStorage :', e);
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_KEYS.COMPLETED_STEPS,
        JSON.stringify(Array.from(STATE.completedSteps))
      );
      if (STATE.currentStepId) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_STEP, STATE.currentStepId);
      }
    } catch (e) {
      console.warn('Impossible de sauvegarder dans LocalStorage :', e);
    }
  }

  function saveTheme() {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, STATE.isDarkMode ? 'dark' : 'light');
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // GESTION DU THÈME SOMBRE / CLAIR
  // --------------------------------------------------------------------------
  function setupTheme() {
    const html = document.documentElement;
    if (STATE.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    updateThemeIcon();
  }

  function toggleTheme() {
    STATE.isDarkMode = !STATE.isDarkMode;
    setupTheme();
    saveTheme();
    showToast(STATE.isDarkMode ? 'Mode sombre activé' : 'Mode clair activé', 'info');
  }

  function updateThemeIcon() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    
    if (STATE.isDarkMode) {
      btn.innerHTML = `
        <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `;
      btn.title = "Passer en mode clair";
    } else {
      btn.innerHTML = `
        <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
      btn.title = "Passer en mode sombre";
    }
  }

  // --------------------------------------------------------------------------
  // NAVIGATION ENTRE ÉTAPES
  // --------------------------------------------------------------------------
  function goToStep(stepId) {
    const step = window.COURSE_STEPS.find(s => s.id === stepId);
    if (!step) return;

    STATE.currentStepId = stepId;
    window.location.hash = stepId;
    saveProgress();

    // Fermer le menu mobile si ouvert
    if (STATE.isMobileSidebarOpen) {
      toggleMobileSidebar(false);
    }

    renderApp();

    // Défiler vers le haut de la zone de contenu
    const scrollContainer = document.getElementById('main-content-scroll');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function goToNextStep() {
    const currentIndex = window.COURSE_STEPS.findIndex(s => s.id === STATE.currentStepId);
    if (currentIndex < window.COURSE_STEPS.length - 1) {
      goToStep(window.COURSE_STEPS[currentIndex + 1].id);
    } else {
      celebrateCourseCompletion();
    }
  }

  function goToPreviousStep() {
    const currentIndex = window.COURSE_STEPS.findIndex(s => s.id === STATE.currentStepId);
    if (currentIndex > 0) {
      goToStep(window.COURSE_STEPS[currentIndex - 1].id);
    }
  }

  function toggleStepCompletion(stepId) {
    const targetId = stepId || STATE.currentStepId;
    const isCompleted = STATE.completedSteps.has(targetId);

    if (isCompleted) {
      STATE.completedSteps.delete(targetId);
      showToast('Étape marquée comme non terminée', 'info');
    } else {
      STATE.completedSteps.add(targetId);
      showToast('Étape validée ! Progression sauvegardée 🎉', 'success');
      playCompletionTone();
      triggerConfetti();

      // Vérifier si tout le module est terminé
      checkModuleCompletion(targetId);
    }

    saveProgress();
    renderApp();
  }

  function checkModuleCompletion(stepId) {
    const currentStep = window.COURSE_STEPS.find(s => s.id === stepId);
    if (!currentStep) return;

    const moduleSteps = window.COURSE_STEPS.filter(s => s.moduleIndex === currentStep.moduleIndex);
    const allModuleCompleted = moduleSteps.every(s => STATE.completedSteps.has(s.id));
    const allCourseCompleted = window.COURSE_STEPS.every(s => STATE.completedSteps.has(s.id));

    if (allCourseCompleted) {
      setTimeout(() => {
        celebrateCourseCompletion();
      }, 500);
    } else if (allModuleCompleted) {
      const module = window.COURSE_MODULES[currentStep.moduleIndex];
      setTimeout(() => {
        showToast(`🏆 Bravo ! Vous avez validé l'intégralité du ${module.title} !`, 'success');
        triggerConfetti(true);
      }, 600);
    }
  }

  function resetAllProgress() {
    if (confirm("Voulez-vous vraiment réinitialiser l'ensemble de votre progression ? Vos étapes validées seront décochées.")) {
      STATE.completedSteps.clear();
      saveProgress();
      renderApp();
      showToast('Progression réinitialisée à 0%', 'info');
    }
  }

  // --------------------------------------------------------------------------
  // RENDU PRINCIPAL
  // --------------------------------------------------------------------------
  function renderApp() {
    renderProgressBar();
    renderSidebar();
    renderMainContent();
  }

  // Barre de progression globale
  function renderProgressBar() {
    const totalSteps = window.COURSE_STEPS.length;
    const completedCount = STATE.completedSteps.size;
    const percentage = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

    const fillElem = document.getElementById('global-progress-fill');
    const textElem = document.getElementById('global-progress-text');
    const countElem = document.getElementById('global-progress-count');

    if (fillElem) {
      fillElem.style.width = `${percentage}%`;
    }
    if (textElem) {
      textElem.textContent = `${percentage}%`;
    }
    if (countElem) {
      countElem.textContent = `${completedCount} / ${totalSteps} étapes terminées`;
    }

    // Badge dans l'en-tête mobile
    const mobileBadge = document.getElementById('mobile-progress-badge');
    if (mobileBadge) {
      mobileBadge.textContent = `${percentage}%`;
    }
  }

  // Rendu de la barre latérale (Sidebar)
  function renderSidebar() {
    const container = document.getElementById('sidebar-modules-list');
    if (!container) return;

    const filterQuery = STATE.searchQuery.trim().toLowerCase();

    let html = '';

    window.COURSE_MODULES.forEach((mod, modIdx) => {
      // Étapes de ce module
      const moduleSteps = window.COURSE_STEPS.filter(s => s.moduleIndex === modIdx);
      
      // Filtrage par recherche
      const matchingSteps = moduleSteps.filter(s => {
        if (!filterQuery) return true;
        return (
          s.title.toLowerCase().includes(filterQuery) ||
          s.subtitle.toLowerCase().includes(filterQuery) ||
          s.summary.toLowerCase().includes(filterQuery) ||
          s.stepNumber.toLowerCase().includes(filterQuery)
        );
      });

      if (filterQuery && matchingSteps.length === 0) {
        return; // Masquer le module si aucune étape ne correspond
      }

      const completedInMod = moduleSteps.filter(s => STATE.completedSteps.has(s.id)).length;
      const isModCompleted = completedInMod === moduleSteps.length && moduleSteps.length > 0;
      const isCurrentMod = moduleSteps.some(s => s.id === STATE.currentStepId);
      const isCollapsed = STATE.collapsedModules[modIdx] === true && !filterQuery && !isCurrentMod;

      html += `
        <div class="mb-3 border border-slate-200 dark:border-slate-800/80 rounded-xl overflow-hidden bg-slate-50/70 dark:bg-slate-900/40 transition-all duration-200">
          <!-- En-tête du module (accordéon) -->
          <button 
            type="button"
            onclick="window.__toggleModuleCollapse(${modIdx})"
            class="w-full px-3.5 py-3 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
          >
            <div class="flex items-center space-x-2.5 min-w-0 pr-2">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                isModCompleted 
                  ? 'bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20' 
                  : isCurrentMod 
                    ? 'bg-orange-500/10 text-[#ff7d00] dark:bg-orange-500/20' 
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }">
                ${getModuleIconSvg(mod.icon, isModCompleted)}
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">
                  ${mod.title.split(':')[0]}
                </h4>
                <p class="text-xs font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-[#ff7d00] transition-colors">
                  ${mod.shortTitle || mod.title}
                </p>
              </div>
            </div>

            <div class="flex items-center space-x-2 shrink-0">
              <span class="text-[10px] font-mono px-1.5 py-0.5 rounded ${
                isModCompleted 
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 font-bold' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }">
                ${completedInMod}/${moduleSteps.length}
              </span>
              <svg class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Liste des étapes du module -->
          <div class="${isCollapsed ? 'hidden' : 'block'} border-t border-slate-200/80 dark:border-slate-800/50 p-1.5 space-y-1">
            ${matchingSteps.map(step => {
              const isActive = step.id === STATE.currentStepId;
              const isDone = STATE.completedSteps.has(step.id);

              return `
                <div 
                  class="group flex items-center justify-between px-2.5 py-2 rounded-lg text-left text-xs transition-all duration-150 cursor-pointer ${
                    isActive 
                      ? 'bg-[#ff7d00] text-white font-medium shadow-sm shadow-orange-500/30' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800/80'
                  }"
                  onclick="window.__goToStep('${step.id}')"
                >
                  <div class="flex items-center space-x-2.5 min-w-0 pr-2">
                    <!-- Checkbox indicateur -->
                    <button 
                      type="button"
                      onclick="event.stopPropagation(); window.__toggleStepCompletion('${step.id}')"
                      class="shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        isDone 
                          ? isActive 
                            ? 'bg-white text-[#ff7d00] border-white' 
                            : 'bg-emerald-500 text-white border-emerald-500' 
                          : isActive 
                            ? 'border-white/60 hover:border-white' 
                            : 'border-slate-300 dark:border-slate-600 hover:border-[#ff7d00]'
                      }"
                      title="${isDone ? 'Marquer comme non terminée' : 'Marquer comme terminée'}"
                    >
                      ${isDone ? `
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      ` : ''}
                    </button>

                    <!-- Titre de l'étape -->
                    <div class="truncate">
                      <span class="font-mono text-[10px] opacity-75 mr-1">${step.stepNumber}</span>
                      <span>${step.title.split(':')[0]}</span>
                    </div>
                  </div>

                  <!-- Durée badge -->
                  <span class="shrink-0 text-[10px] font-mono opacity-70 ml-1">
                    ${step.duration}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    if (filterQuery && html === '') {
      html = `
        <div class="text-center py-8 px-4 text-slate-400">
          <svg class="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <p class="text-xs">Aucun chapitre ne correspond à "<strong>${filterQuery}</strong>"</p>
          <button 
            type="button" 
            onclick="window.__clearSearch()" 
            class="mt-2 text-xs text-[#ff7d00] hover:underline"
          >
            Réinitialiser la recherche
          </button>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  // Rendu de la zone de contenu principale
  function renderMainContent() {
    const container = document.getElementById('step-content-area');
    if (!container) return;

    try {
      const step = window.COURSE_STEPS.find(s => s.id === STATE.currentStepId);
      if (!step) return;

    const currentIndex = window.COURSE_STEPS.findIndex(s => s.id === STATE.currentStepId);
    const totalSteps = window.COURSE_STEPS.length;
    const isCompleted = STATE.completedSteps.has(step.id);
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < totalSteps - 1;

    // Déterminer la difficulté couleur badge
    let diffBadgeColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
    if (step.difficulty === 'Intermédiaire') {
      diffBadgeColor = 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300';
    } else if (step.difficulty === 'Avancé') {
      diffBadgeColor = 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300';
    } else if (step.difficulty === 'Synthèse') {
      diffBadgeColor = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';
    }

    let html = `
      <article class="max-w-4xl mx-auto step-fade-in pb-16">
        <!-- Fil d'Ariane (Breadcrumbs) -->
        <nav class="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono no-print">
          <span class="hover:text-[#ff7d00] cursor-pointer" onclick="window.__goToStep('${window.COURSE_STEPS[0].id}')">7Robot Academy</span>
          <span>/</span>
          <span class="truncate max-w-[200px]">${step.moduleTitle}</span>
          <span>/</span>
          <span class="text-slate-800 dark:text-slate-200 font-semibold truncate">Étape ${step.stepNumber}</span>
        </nav>

        <!-- En-tête de l'étape -->
        <header class="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-[#ff7d00] dark:bg-orange-500/10 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20">
              ${step.category}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${diffBadgeColor}">
              ${step.difficulty}
            </span>
            <span class="flex items-center text-xs font-mono text-slate-500 dark:text-slate-400">
              <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ${step.duration} de pratique
            </span>
            <span class="ml-auto font-mono text-xs text-slate-400">
              Étape ${currentIndex + 1} sur ${totalSteps}
            </span>
          </div>

          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            ${step.title}
          </h1>
          <p class="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            ${step.subtitle}
          </p>
        </header>

        <!-- Objectif Flash / Encart visuel très clair (Spécification clé du projet) -->
        ${step.quickGoal ? `
          <div class="mb-8 rounded-2xl bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-500/5 border-2 border-orange-500/40 p-5 sm:p-6 shadow-sm glow-7robot">
            <div class="flex items-start space-x-3.5">
              <div class="shrink-0 p-2.5 bg-[#ff7d00] text-white rounded-xl shadow-md">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase bg-[#ff7d00] text-white shadow-sm">
                  En bref : ce qu'on va faire
                </span>
                <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-2 mb-3">
                  ${step.quickGoal.concept}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                  ${step.quickGoal.actions.map((act, idx) => `
                    <div class="flex items-start space-x-2 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                      <span class="w-5 h-5 rounded-full bg-[#ff7d00] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
                      <span class="leading-snug">${act}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Bouton / Carte de téléchargement ZIP (Pack Feetech 7Robot) -->
        ${step.downloadZip ? `
          <div class="mb-8 p-5 rounded-2xl bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-transparent border-2 border-sky-500/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3.5">
              <div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30 shadow-sm">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <div class="flex items-center space-x-2">
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/20 text-sky-400 uppercase">Fichier CAO 7Robot</span>
                  <span class="text-xs font-mono text-slate-400">${step.downloadZip.fileName}</span>
                </div>
                <h4 class="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                  Télécharger le pack d'assemblage Feetech
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-300">
                  ${step.downloadZip.description}
                </p>
              </div>
            </div>
            <a 
              href="${step.downloadZip.filePath}" 
              download="${step.downloadZip.fileName}"
              class="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-600/30 flex items-center justify-center space-x-2 transition-all shrink-0 hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Télécharger le ZIP (315 Ko)</span>
            </a>
          </div>
        ` : ''}

        <!-- Objectifs pédagogiques optionnels (affichés uniquement si définis et pas de doublon avec quickGoal) -->
        ${step.objectives && step.objectives.length > 0 && !step.quickGoal ? `
          <div class="mb-8 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <h3 class="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center mb-3">
              <svg class="w-4 h-4 text-[#ff7d00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Objectifs de cette étape
            </h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              ${step.objectives.map(obj => `
                <li class="flex items-start space-x-2">
                  <span class="text-emerald-500 font-bold shrink-0 mt-0.5">✔</span>
                  <span>${obj}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Instructions pas à pas -->
        <div class="space-y-8 mb-10">
          ${step.instructions.map((inst) => `
            <section class="bg-white dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm">
              <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-2.5 flex items-center">
                <span class="w-2 h-2 rounded-full bg-[#ff7d00] mr-2.5 shrink-0"></span>
                ${inst.title}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                ${inst.text}
              </p>
              ${inst.bullets && inst.bullets.length > 0 ? `
                <ul class="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 pl-2">
                  ${inst.bullets.map(b => `
                    <li class="flex items-start space-x-2.5">
                      <span class="text-[#ff7d00] shrink-0 font-bold mt-1 text-xs">▸</span>
                      <div class="leading-relaxed">${b}</div>
                    </li>
                  `).join('')}
                </ul>
              ` : ''}
            </section>
          `).join('')}
        </div>

        <!-- Encart Média / Illustration / GIF (Spécification clé du projet) -->
        <div class="mb-10">
          ${renderImagePlaceholder(step)}
        </div>

        <!-- Blocs d'avertissement (Pièges fréquents) -->
        ${step.warnings && step.warnings.length > 0 ? `
          <div class="space-y-4 mb-8">
            ${step.warnings.map(w => `
              <div class="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-2xl p-5 text-slate-800 dark:text-slate-200 shadow-sm">
                <div class="flex items-start space-x-3">
                  <div class="shrink-0 p-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-1">
                      ⚠️ ${w.title}
                    </h3>
                    <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      ${w.text}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Blocs d'astuce (Raccourcis & Pro-tips) -->
        ${step.tips && step.tips.length > 0 ? `
          <div class="space-y-4 mb-12">
            ${step.tips.map(t => `
              <div class="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-2xl p-5 text-slate-800 dark:text-slate-200 shadow-sm">
                <div class="flex items-start space-x-3">
                  <div class="shrink-0 p-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide mb-1">
                      💡 ${t.title}
                    </h3>
                    <div class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      ${t.text}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Pied de page de navigation (Spécification clé du projet) -->
        <footer class="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 no-print">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Bouton Étape précédente -->
            <button
              type="button"
              onclick="window.__goToPreviousStep()"
              class="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${
                !hasPrevious ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''
              }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Étape précédente</span>
            </button>

            <!-- Bouton central : Validation Étape terminée -->
            <button
              type="button"
              onclick="window.__toggleStepCompletion('${step.id}')"
              class="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2.5 transition-all shadow-md ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25 ring-2 ring-emerald-400'
                  : 'bg-slate-800 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 text-white hover:border-[#ff7d00] border border-slate-700'
              }"
            >
              <div class="w-5 h-5 rounded-full flex items-center justify-center border ${
                isCompleted ? 'border-white bg-white/20' : 'border-slate-400'
              }">
                ${isCompleted ? `
                  <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                ` : ''}
              </div>
              <span>${isCompleted ? 'Étape terminée (Validée)' : 'Marquer comme terminée'}</span>
            </button>

            <!-- Bouton Étape suivante -->
            <button
              type="button"
              onclick="window.__goToNextStep()"
              class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ff7d00] hover:bg-[#e06e00] text-white text-sm font-semibold flex items-center justify-center space-x-2 shadow-sm shadow-orange-500/30 transition-all group"
            >
              <span>${hasNext ? 'Étape suivante' : 'Terminer la formation 🎉'}</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Raccourcis clavier indications -->
          <div class="mt-5 text-center text-xs text-slate-400 dark:text-slate-500 font-mono">
            Raccourcis : <kbd class="shortcut-key">←</kbd> Précédent &bull; <kbd class="shortcut-key">→</kbd> Suivant &bull; <kbd class="shortcut-key">Espace</kbd> Valider l'étape
          </div>
        </footer>
      </article>
    `;

    container.innerHTML = html;
    } catch (err) {
      console.error("Erreur lors de l'affichage de l'étape :", err);
      container.innerHTML = `
        <div class="max-w-2xl mx-auto p-6 rounded-2xl bg-red-500/10 border-2 border-red-500/40 text-red-700 dark:text-red-300 my-10">
          <h2 class="font-bold text-lg mb-2">⚠️ Une erreur est survenue lors de l'affichage</h2>
          <p class="text-sm font-mono">${err.message}</p>
        </div>
      `;
    }
  }

  // --------------------------------------------------------------------------
  // ENCARTS D'ILLUSTRATION / PLACEHOLDERS HAUTE TECHNOLOGIE
  // --------------------------------------------------------------------------
  function renderImagePlaceholder(step) {
    const ph = step.placeholder;
    if (!ph) return '';

    const previewUrl = STATE.userPreviews[step.id];
    const activeImageSrc = previewUrl || step.imageSrc || (ph && ph.imageSrc);

    return `
      <div class="cad-screenshot-placeholder relative rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/80 p-4 sm:p-5 overflow-hidden transition-all duration-200 hover:border-orange-500/50 group bg-cad-grid shadow-sm">
        <!-- Viseurs techniques CAD aux 4 coins -->
        <span class="absolute top-2 left-2 text-slate-400/60 dark:text-slate-600 font-mono text-[10px] select-none">+</span>
        <span class="absolute top-2 right-2 text-slate-400/60 dark:text-slate-600 font-mono text-[10px] select-none">+</span>
        <span class="absolute bottom-2 left-2 text-slate-400/60 dark:text-slate-600 font-mono text-[10px] select-none">+</span>
        <span class="absolute bottom-2 right-2 text-slate-400/60 dark:text-slate-600 font-mono text-[10px] select-none">+</span>

        <!-- Image réelle ou GIF animé actif -->
        ${activeImageSrc ? `
          <div class="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-950/40">
            <img 
              src="${activeImageSrc}" 
              alt="${ph.title}" 
              class="w-full h-auto max-h-[520px] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.01]" 
              loading="lazy"
            />
            
            <!-- Barre technique inférieure avec titre -->
            <div class="px-3.5 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div class="flex items-center space-x-2 text-slate-300 min-w-0">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span class="font-bold text-white truncate">${ph.title}</span>
                <span class="hidden md:inline text-slate-400 font-mono text-[11px] truncate">&bull; ${ph.caption}</span>
              </div>
              
              <span class="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#ff7d00]/15 text-[#ff7d00] border border-[#ff7d00]/30 shrink-0">
                7Robot CAD
              </span>
            </div>
          </div>
        ` : `
          <!-- Mockup SVG technique CAD avec grille (Fallback si pas d'image) -->
          <div class="flex flex-col items-center justify-center py-8 px-4 text-center">
            <div class="w-16 h-16 mb-4 rounded-2xl bg-slate-200/90 dark:bg-slate-800/90 text-slate-500 dark:text-slate-400 flex items-center justify-center border border-slate-300 dark:border-slate-700 shadow-inner group-hover:text-[#ff7d00] transition-colors">
              ${getCadSvgWireframe(ph.svgType)}
            </div>

            <!-- Titre et description de l'encart -->
            <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-2">
              <svg class="w-3.5 h-3.5 text-[#ff7d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>Encart Illustration / GIF SolidWorks</span>
            </div>

            <h4 class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 max-w-md">
              ${ph.title}
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 max-w-lg mt-1 mb-3">
              ${ph.caption}
            </p>

            <!-- Détails techniques de fichier attendu -->
            <div class="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span class="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50">
                Format : ${ph.recommendedDimensions}
              </span>
              <span class="px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50">
                Fichier cible : assets/images/${ph.imageFileName}
              </span>
            </div>
          </div>
        `}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // SVG WIREFRAMES TECHNIQUES POUR LES ILLUSTRATIONS
  // --------------------------------------------------------------------------
  function getCadSvgWireframe(type) {
    switch (type) {
      case 'interface':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="1.5"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8h18M8 8v13M12 14l3-3 3 3"/>
          </svg>
        `;
      case 'sketch':
      case 'dimension':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="7" stroke-width="1.5" stroke-dasharray="2 2"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M12 5v14"/>
          </svg>
        `;
      case '3d':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
          </svg>
        `;
      case 'sweep':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 18c4-12 12-12 16 0"/>
            <ellipse cx="4" cy="18" rx="2" ry="3" stroke-width="1.5"/>
          </svg>
        `;
      case 'revolution':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="4" stroke-width="1.5"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16M8 8l4-4 4 4"/>
          </svg>
        `;
      case 'pattern':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="6" r="2" stroke-width="1.5"/>
            <circle cx="18" cy="12" r="2" stroke-width="1.5"/>
            <circle cx="12" cy="18" r="2" stroke-width="1.5"/>
            <circle cx="6" cy="12" r="2" stroke-width="1.5"/>
          </svg>
        `;
      case 'assembly':
      case 'servo':
      case 'mate':
      case 'kinematics':
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="4" y="6" width="10" height="12" rx="1.5" stroke-width="1.5"/>
            <circle cx="9" cy="10" r="2" stroke-width="1.5"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h6m-3-3v6"/>
          </svg>
        `;
      case 'trophy':
        return `
          <svg class="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3h14a1 1 0 011 1v4a7 7 0 01-7 7 7 7 0 01-7-7V4a1 1 0 011-1z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 15v3m4-3v3m-5 3h6"/>
          </svg>
        `;
      default:
        return `
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <circle cx="12" cy="12" r="3" stroke-width="1.5"/>
          </svg>
        `;
    }
  }

  function getModuleIconSvg(iconName, isCompleted) {
    if (isCompleted) {
      return `
        <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
      `;
    }

    switch (iconName) {
      case 'compass':
        return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
      case 'cube':
        return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
      case 'pencil':
        return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>`;
      case 'sparkles':
        return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`;
      case 'puzzle':
      default:
        return `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>`;
    }
  }

  // --------------------------------------------------------------------------
  // GESTION DES ÉVÉNEMENTS & NAVIGATION CLAVIER
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    // Bouton de bascule de thème
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Bouton mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => toggleMobileSidebar());
    }

    // Fermeture du backdrop mobile
    const backdrop = document.getElementById('sidebar-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => toggleMobileSidebar(false));
    }

    // Barre de recherche dans la sidebar
    const searchInput = document.getElementById('sidebar-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value;
        renderSidebar();
      });
    }

    // Réinitialisation de la progression
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllProgress);
    }

    // Bouton d'impression / export PDF
    const printBtn = document.getElementById('print-cheatsheet-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  }

  function setupKeyboardNavigation() {
    window.addEventListener('keydown', (e) => {
      // Ne rien faire si on est en train de taper dans un champ de saisie
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextStep();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPreviousStep();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        toggleStepCompletion();
      } else if (e.key === '/' || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        const searchInput = document.getElementById('sidebar-search-input');
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  function toggleMobileSidebar(forceState) {
    const sidebar = document.getElementById('main-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar || !backdrop) return;

    STATE.isMobileSidebarOpen = forceState !== undefined ? forceState : !STATE.isMobileSidebarOpen;

    if (STATE.isMobileSidebarOpen) {
      sidebar.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
    } else {
      sidebar.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
    }
  }

  // --------------------------------------------------------------------------
  // EFFETS SONORES ET CONFETTIS LÉGERS (SANS DÉPENDANCE EXTERNE)
  // --------------------------------------------------------------------------
  function playCompletionTone() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      // Audio API non supportée ou bloquée par navigateur, ignorer sans erreur
    }
  }

  function triggerConfetti(isSuperCelebration = false) {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff7d00', '#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#ffffff'];
    const count = isSuperCelebration ? 120 : 50;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 2 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * (isSuperCelebration ? 16 : 10),
        vy: (Math.random() - 0.8) * (isSuperCelebration ? 18 : 12),
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    let animationFrame;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeParticles = 0;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravité
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.012;

        if (p.opacity > 0 && p.y < canvas.height) {
          activeParticles++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      if (activeParticles > 0) {
        animationFrame = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }

    renderConfetti();
  }

  function playVictoryFanfare() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [
        { f: 523.25, d: 0.14 }, // C5
        { f: 659.25, d: 0.14 }, // E5
        { f: 783.99, d: 0.14 }, // G5
        { f: 1046.50, d: 0.45 } // C6
      ];

      let startTime = audioCtx.currentTime;
      notes.forEach((note, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, startTime);

        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d);

        startTime += note.d * 0.85;
      });
    } catch (e) {
      // Audio non supporté ou bloqué
    }
  }

  function celebrateCourseCompletion() {
    triggerConfetti(true);
    playVictoryFanfare();
    showToast('⚔️ Tu es maintenant prêt à modéliser des actionneurs pour les robots de combat !!!', 'success');

    // Vérifier si la modale existe déjà pour ne pas la dupliquer
    const existingModal = document.getElementById('course-completion-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'course-completion-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md transition-all duration-300 opacity-0';
    modal.innerHTML = `
      <div class="relative w-full max-w-xl bg-slate-900 border-2 border-[#ff7d00] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/30 text-center glow-7robot transform transition-all duration-300 scale-95 max-h-[90vh] overflow-y-auto">
        <!-- Bouton fermer en haut à droite -->
        <button 
          type="button" 
          onclick="document.getElementById('course-completion-modal').remove()"
          class="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          title="Fermer la fenêtre"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Badge & Icône robot combat -->
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-mono font-bold uppercase mb-4">
          <span>🏆 HOMOLOGATION CAO OFFICIELLE • 7ROBOT</span>
        </div>

        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#ff7d00] to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/40 text-white">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <!-- Le Message officiel demandé -->
        <h2 class="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
          Tu es maintenant prêt à modéliser des actionneurs pour les robots de combat !!!
        </h2>

        <p class="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          Toutes nos félicitations de la part du club <strong>7Robot</strong> ! Tu as brillamment validé les 17 étapes du parcours : de l'esquisse 100% contrainte jusqu'à la conception en contexte de la glissière Feetech, des inserts thermofusibles M3 et du couvercle fraisé.
        </p>

        <!-- Grille des compétences validées -->
        <div class="bg-slate-950/70 rounded-2xl p-4 border border-slate-800 text-left mb-6 space-y-2 text-xs">
          <div class="flex items-center space-x-2 text-emerald-400 font-semibold">
            <span>✔</span>
            <span>Esquisses 2D totalement contraintes (Bleu ➔ Noir)</span>
          </div>
          <div class="flex items-center space-x-2 text-emerald-400 font-semibold">
            <span>✔</span>
            <span>Balayage, révolution cylindrique et répétitions 3D</span>
          </div>
          <div class="flex items-center space-x-2 text-emerald-400 font-semibold">
            <span>✔</span>
            <span>Conception en contexte (Top-Down) sur servomoteur Feetech</span>
          </div>
          <div class="flex items-center space-x-2 text-emerald-400 font-semibold">
            <span>✔</span>
            <span>Glissière Feetech sans vis dans le servo & inserts laiton Ø4.6 mm</span>
          </div>
          <div class="flex items-center space-x-2 text-emerald-400 font-semibold">
            <span>✔</span>
            <span>Couvercle fraisé Ø3.2 mm (chanfrein 45° x 1.75 mm) pour vis FHC M3</span>
          </div>
          <div class="flex items-center space-x-2 text-emerald-400 font-semibold">
            <span>✔</span>
            <span>Validation cinématique à 360° et détection d'interférences</span>
          </div>
        </div>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onclick="window.print()"
            class="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 flex items-center justify-center space-x-2 transition-all hover:scale-105"
          >
            <svg class="w-4 h-4 text-[#ff7d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Imprimer mon attestation (PDF)</span>
          </button>
          
          <button
            type="button"
            onclick="document.getElementById('course-completion-modal').remove()"
            class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ff7d00] hover:bg-[#e06e00] text-white text-xs font-bold shadow-lg shadow-orange-500/30 flex items-center justify-center space-x-2 transition-all hover:scale-105"
          >
            <span>En route pour l'atelier 7Robot 🚀</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Animation d'ouverture
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
      const box = modal.querySelector('div');
      if (box) {
        box.classList.remove('scale-95');
        box.classList.add('scale-100');
      }
    }, 10);

    // Fermer avec Escape
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        const m = document.getElementById('course-completion-modal');
        if (m) m.remove();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);

    // Fermer en cliquant sur l'arrière-plan
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
        document.removeEventListener('keydown', handleEsc);
      }
    });
  }

  // --------------------------------------------------------------------------
  // GESTION DU TOAST NOTIFICATION
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgClass = type === 'success' 
      ? 'bg-emerald-600 text-white shadow-emerald-500/20' 
      : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-slate-900/20';

    toast.className = `px-4 py-3 rounded-xl shadow-lg font-medium text-xs sm:text-sm flex items-center space-x-2.5 transform transition-all duration-300 translate-y-3 opacity-0 ${bgClass}`;
    toast.innerHTML = `
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Animation d'entrée
    setTimeout(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    // Animation de sortie
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-3', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // APERÇU D'IMAGE LOCALE EN TEMPS RÉEL (Pour tester les placeholders)
  // --------------------------------------------------------------------------
  window.__handleImageUpload = function (event, stepId) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      STATE.userPreviews[stepId] = e.target.result;
      try {
        sessionStorage.setItem(STORAGE_KEYS.USER_PREVIEWS, JSON.stringify(STATE.userPreviews));
      } catch (err) {}
      renderMainContent();
      showToast('Aperçu chargé avec succès pour ce chapitre !', 'success');
    };
    reader.readAsDataURL(file);
  };

  window.__removeUserImage = function (stepId) {
    delete STATE.userPreviews[stepId];
    try {
      sessionStorage.setItem(STORAGE_KEYS.USER_PREVIEWS, JSON.stringify(STATE.userPreviews));
    } catch (err) {}
    renderMainContent();
    showToast('Aperçu supprimé', 'info');
  };

  // --------------------------------------------------------------------------
  // MÉTHODES PUBLIQUES ATTACHÉES À WINDOW (POUR LES HANDLERS HTML)
  // --------------------------------------------------------------------------
  window.__goToStep = goToStep;
  window.__goToNextStep = goToNextStep;
  window.__goToPreviousStep = goToPreviousStep;
  window.__toggleStepCompletion = toggleStepCompletion;
  window.__toggleModuleCollapse = function (modIdx) {
    STATE.collapsedModules[modIdx] = !STATE.collapsedModules[modIdx];
    renderSidebar();
  };
  window.__clearSearch = function () {
    STATE.searchQuery = '';
    const input = document.getElementById('sidebar-search-input');
    if (input) input.value = '';
    renderSidebar();
  };

})();
