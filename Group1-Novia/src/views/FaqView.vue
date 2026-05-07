<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const { t } = useI18n()
const router = useRouter()
const openIndex = ref(null)

const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = computed(() => [
  {
    category: t('faq.s0.label'),
    items: [
      { q: t('faq.s0.q0'), a: t('faq.s0.a0') },
      { q: t('faq.s0.q1'), a: t('faq.s0.a1') },
      { q: t('faq.s0.q2'), a: t('faq.s0.a2') },
    ]
  },
  {
    category: t('faq.s1.label'),
    items: [
      { q: t('faq.s1.q0'), a: t('faq.s1.a0') },
      { q: t('faq.s1.q1'), a: t('faq.s1.a1') },
      { q: t('faq.s1.q2'), a: t('faq.s1.a2') },
      { q: t('faq.s1.q3'), a: t('faq.s1.a3') },
    ]
  },
  {
    category: t('faq.s2.label'),
    items: [
      { q: t('faq.s2.q0'), a: t('faq.s2.a0') },
      { q: t('faq.s2.q1'), a: t('faq.s2.a1') },
      { q: t('faq.s2.q2'), a: t('faq.s2.a2') },
    ]
  },
  {
    category: t('faq.s3.label'),
    items: [
      { q: t('faq.s3.q0'), a: t('faq.s3.a0') },
      { q: t('faq.s3.q1'), a: t('faq.s3.a1') },
    ]
  },
  {
    category: t('faq.s4.label'),
    items: [
      { q: t('faq.s4.q0'), a: t('faq.s4.a0') },
      { q: t('faq.s4.q1'), a: t('faq.s4.a1') },
      { q: t('faq.s4.q2'), a: t('faq.s4.a2') },
    ]
  },
])
</script>

<template>
  <DashboardLayout>
    <div class="faq-page">
      <div class="container">

        <!-- Header -->
        <div class="page-header">
          <div class="header-icon">
            <i class="bi bi-question-circle-fill"></i>
          </div>
          <div>
            <h1>{{ t('faq.title') }}</h1>
            <p>{{ t('faq.subtitle') }}</p>
          </div>
        </div>

        <!-- FAQ sections -->
        <div v-for="(section, si) in faqs" :key="si" class="faq-section">
          <div class="section-label">{{ section.category }}</div>
          <div class="accordion">
            <div
              v-for="(item, ii) in section.items"
              :key="ii"
              class="acc-item"
              :class="{ open: openIndex === `${si}-${ii}` }"
            >
              <button class="acc-q" @click="toggle(`${si}-${ii}`)">
                <span>{{ item.q }}</span>
                <i class="bi" :class="openIndex === `${si}-${ii}` ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
              </button>
              <div class="acc-a" v-show="openIndex === `${si}-${ii}`">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer CTA -->
        <div class="faq-footer">
          <i class="bi bi-headset"></i>
          <div>
            <strong>{{ t('faq.footer.title') }}</strong>
            <p>{{ t('faq.footer.desc') }}</p>
          </div>
          <button class="btn-help" @click="router.push('/help')">
            <i class="bi bi-life-preserver"></i> {{ t('faq.footer.btn') }}
          </button>
        </div>

      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.faq-page {
  min-height: 100vh;
  background: #f0f2f5;
  padding: 28px 16px 48px;
}
.container {
  max-width: 780px;
  margin: 0 auto;
}

/* Header */
.page-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}
.header-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 18px rgba(99,102,241,.3);
}
.page-header h1 {
  margin: 0 0 4px;
  font-size: 1.55rem;
  font-weight: 800;
  color: #0f172a;
}
.page-header p {
  margin: 0;
  color: #64748b;
  font-size: .9rem;
}

/* Section */
.faq-section { margin-bottom: 28px; }
.section-label {
  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: #6366f1;
  margin-bottom: 10px;
  padding-left: 4px;
}

/* Accordion */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.acc-item {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e5e7eb;
  overflow: hidden;
  transition: border-color .15s;
}
.acc-item.open { border-color: #6366f1; }
.acc-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: .9rem;
  font-weight: 600;
  color: #1e293b;
  text-align: left;
}
.acc-q:hover { color: #6366f1; }
.acc-item.open .acc-q { color: #6366f1; }
.acc-q i { flex-shrink: 0; font-size: .85rem; }
.acc-a {
  padding: 0 16px 14px;
  border-top: 1px solid #f1f5f9;
}
.acc-a p {
  margin: 10px 0 0;
  font-size: .86rem;
  color: #475569;
  line-height: 1.65;
}

/* Footer */
.faq-footer {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.faq-footer > i {
  font-size: 1.6rem;
  color: #6366f1;
  flex-shrink: 0;
}
.faq-footer strong {
  display: block;
  font-size: .9rem;
  color: #1e293b;
  margin-bottom: 3px;
}
.faq-footer p {
  margin: 0;
  font-size: .82rem;
  color: #64748b;
}
.btn-help {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: 9px;
  border: 1.5px solid #6366f1;
  background: #6366f1;
  color: #fff;
  font-size: .84rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all .15s;
  flex-shrink: 0;
}
.btn-help:hover { background: #4f46e5; border-color: #4f46e5; }
</style>
