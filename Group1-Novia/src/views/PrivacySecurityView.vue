<template>
  <DashboardLayout>
    <div class="privacy-page">
      <div class="privacy-container">
        <header class="page-header">
          <div class="header-icon">
            <i class="bi bi-shield-lock-fill"></i>
          </div>
          <div>
            <h1 class="page-title">{{ t('privacy.title') }}</h1>
            <p class="page-subtitle">{{ t('privacy.subtitle') }}</p>
          </div>
        </header>

        <section class="card-block">
          <div class="card-head">
            <h2>{{ t('privacy.idCard.title') }}</h2>
            <span class="status-chip pending">{{ t('privacy.idCard.pending') }}</span>
          </div>
          <p class="card-text">{{ t('privacy.idCard.desc') }}</p>
          <ul class="info-list">
            <li>{{ t('privacy.idCard.li0') }}</li>
            <li>{{ t('privacy.idCard.li1') }}</li>
            <li>{{ t('privacy.idCard.li2') }}</li>
          </ul>
          <p class="note">{{ t('privacy.idCard.reviewTime') }}</p>
        </section>

        <section class="card-block">
          <div class="card-head">
            <h2>{{ t('privacy.cert.title') }}</h2>
            <span class="status-chip pending">{{ t('privacy.cert.pending') }}</span>
          </div>
          <p class="card-text">{{ t('privacy.cert.desc') }}</p>
          <ul class="info-list">
            <li>{{ t('privacy.cert.li0') }}</li>
            <li>{{ t('privacy.cert.li1') }}</li>
            <li>{{ t('privacy.cert.li2') }}</li>
          </ul>
          <p class="note">{{ t('privacy.cert.reviewTime') }}</p>
        </section>

        <section class="card-block muted">
          <h3>{{ t('privacy.notice.title') }}</h3>
          <p>{{ t('privacy.notice.desc') }}</p>
        </section>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
const { t } = useI18n()
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  background: #f3f4f6;
  padding: 24px 16px 40px;
}

.privacy-container {
  max-width: 860px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.header-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.page-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
}

.page-subtitle {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: #64748b;
}

.card-block {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px;
  margin-bottom: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.card-head h2 {
  margin: 0;
  font-size: 1.05rem;
  color: #111827;
}

.status-chip {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-chip.pending {
  background: #fff7ed;
  color: #c2410c;
  border: 1px solid #fed7aa;
}

.card-text {
  margin: 0 0 10px;
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.5;
}

.info-list {
  margin: 0 0 10px;
  padding-left: 18px;
  color: #334155;
  font-size: 0.88rem;
  line-height: 1.6;
}

.note {
  margin: 0;
  font-size: 0.82rem;
  color: #64748b;
}

.card-block.muted h3 {
  margin: 0 0 8px;
  font-size: 0.98rem;
  color: #111827;
}

.card-block.muted p {
  margin: 0;
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.6;
}
</style>
