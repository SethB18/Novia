<script setup>
import { useI18n } from 'vue-i18n'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <DashboardLayout>
    <div class="about-page">
      <div class="container">

        <!-- Hero -->
        <div class="about-hero">
          <div class="hero-icon">
            <i class="bi bi-hexagon-fill"></i>
          </div>
          <div class="hero-text">
            <h1>About <span class="brand">Novia</span></h1>
            <p>{{ t('about.heroDesc') }}</p>
          </div>
        </div>

        <!-- Mission banner -->
        <div class="mission-banner">
          <i class="bi bi-rocket-takeoff-fill mission-icon"></i>
          <div>
            <strong>{{ t('about.mission.title') }}</strong>
            <p>{{ t('about.mission.desc') }}</p>
          </div>
        </div>

        <!-- Three pillars -->
        <div class="pillars">

          <div class="pillar">
            <div class="pillar-icon community">
              <i class="bi bi-people-fill"></i>
            </div>
            <h3>{{ t('about.community.title') }}</h3>
            <p>{{ t('about.community.desc') }}</p>
            <ul class="pillar-list">
              <li><i class="bi bi-check2-circle"></i> {{ t('about.community.li0') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.community.li1') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.community.li2') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.community.li3') }}</li>
            </ul>
          </div>

          <div class="pillar">
            <div class="pillar-icon jobs">
              <i class="bi bi-briefcase-fill"></i>
            </div>
            <h3>{{ t('about.jobs.title') }}</h3>
            <p>{{ t('about.jobs.desc') }}</p>
            <ul class="pillar-list">
              <li><i class="bi bi-check2-circle"></i> {{ t('about.jobs.li0') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.jobs.li1') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.jobs.li2') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.jobs.li3') }}</li>
            </ul>
          </div>

          <div class="pillar">
            <div class="pillar-icon events">
              <i class="bi bi-calendar-event-fill"></i>
            </div>
            <h3>{{ t('about.events.title') }}</h3>
            <p>{{ t('about.events.desc') }}</p>
            <ul class="pillar-list">
              <li><i class="bi bi-check2-circle"></i> {{ t('about.events.li0') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.events.li1') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.events.li2') }}</li>
              <li><i class="bi bi-check2-circle"></i> {{ t('about.events.li3') }}</li>
            </ul>
          </div>

        </div>

        <!-- How it works -->
        <div class="section-card">
          <h2><i class="bi bi-diagram-3-fill"></i> {{ t('about.howItWorks.title') }}</h2>
          <div class="steps">
            <div class="step">
              <div class="step-num">1</div>
              <div>
                <strong>{{ t('about.howItWorks.s1title') }}</strong>
                <p>{{ t('about.howItWorks.s1desc') }}</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">2</div>
              <div>
                <strong>{{ t('about.howItWorks.s2title') }}</strong>
                <p>{{ t('about.howItWorks.s2desc') }}</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">3</div>
              <div>
                <strong>{{ t('about.howItWorks.s3title') }}</strong>
                <p>{{ t('about.howItWorks.s3desc') }}</p>
              </div>
            </div>
            <div class="step">
              <div class="step-num">4</div>
              <div>
                <strong>{{ t('about.howItWorks.s4title') }}</strong>
                <p>{{ t('about.howItWorks.s4desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick links -->
        <div class="quick-links">
          <button class="ql-btn" @click="router.push('/faq')">
            <i class="bi bi-question-circle-fill"></i>
            <span>{{ t('about.links.faq') }}</span>
          </button>
          <button class="ql-btn" @click="router.push('/help')">
            <i class="bi bi-life-preserver"></i>
            <span>{{ t('about.links.help') }}</span>
          </button>
          <button class="ql-btn" @click="router.push('/')">
            <i class="bi bi-house-door-fill"></i>
            <span>{{ t('about.links.home') }}</span>
          </button>
        </div>

      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #f0f2f5;
  padding: 28px 16px 48px;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}

/* Hero */
.about-hero {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
}
.hero-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(99,102,241,0.35);
}
.hero-text h1 {
  margin: 0 0 4px;
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
}
.hero-text .brand { color: #6366f1; }
.hero-text p {
  margin: 0;
  color: #64748b;
  font-size: .95rem;
}

/* Mission banner */
.mission-banner {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 14px;
  padding: 18px 22px;
  color: #fff;
  margin-bottom: 28px;
}
.mission-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}
.mission-banner strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}
.mission-banner p {
  margin: 0;
  font-size: .88rem;
  opacity: .92;
  line-height: 1.6;
}

/* Three pillars */
.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 24px;
}
@media (max-width: 768px) {
  .pillars { grid-template-columns: 1fr; }
}
.pillar {
  background: #fff;
  border-radius: 14px;
  padding: 22px 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.pillar-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-bottom: 14px;
}
.pillar-icon.community { background: #ede9fe; color: #6366f1; }
.pillar-icon.jobs      { background: #dcfce7; color: #16a34a; }
.pillar-icon.events    { background: #fef3c7; color: #d97706; }
.pillar h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px;
}
.pillar p {
  font-size: .84rem;
  color: #64748b;
  line-height: 1.65;
  margin: 0 0 14px;
}
.pillar-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.pillar-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: .82rem;
  color: #374151;
}
.pillar-list i { color: #6366f1; flex-shrink: 0; }

/* How it works */
.section-card {
  background: #fff;
  border-radius: 14px;
  padding: 22px 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
  margin-bottom: 24px;
}
.section-card h2 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 9px;
}
.section-card h2 i { color: #6366f1; }
.steps { display: flex; flex-direction: column; gap: 18px; }
.step {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.step-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  font-size: .88rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.step strong { display: block; font-size: .9rem; color: #1e293b; margin-bottom: 3px; }
.step p { margin: 0; font-size: .82rem; color: #64748b; line-height: 1.6; }

/* Quick links */
.quick-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.ql-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  border-radius: 10px;
  border: 1.5px solid #e5e7eb;
  background: #fff;
  color: #374151;
  font-size: .88rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all .15s;
}
.ql-btn:hover { border-color: #6366f1; color: #6366f1; background: #f8f5ff; }
.ql-btn i { font-size: 1rem; }
</style>
