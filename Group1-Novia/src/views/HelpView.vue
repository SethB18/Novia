<script setup>
import { useI18n } from 'vue-i18n'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { useRouter } from 'vue-router'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <DashboardLayout>
    <div class="help-page">
      <div class="container">

        <!-- Header -->
        <div class="page-header">
          <div class="header-icon">
            <i class="bi bi-life-preserver"></i>
          </div>
          <div>
            <h1>{{ t('help.title') }}</h1>
            <p>{{ t('help.subtitle') }}</p>
          </div>
        </div>

        <!-- Topics grid -->
        <div class="topics-grid">

          <div class="topic-card">
            <div class="topic-icon profile">
              <i class="bi bi-person-circle"></i>
            </div>
            <h3>{{ t('help.profile.title') }}</h3>
            <ul>
              <li v-html="t('help.profile.li0')"></li>
              <li v-html="t('help.profile.li1')"></li>
              <li v-html="t('help.profile.li2')"></li>
              <li v-html="t('help.profile.li3')"></li>
              <li v-html="t('help.profile.li4')"></li>
              <li v-html="t('help.profile.li5')"></li>
            </ul>
          </div>

          <div class="topic-card">
            <div class="topic-icon post">
              <i class="bi bi-pencil-square"></i>
            </div>
            <h3>{{ t('help.post.title') }}</h3>
            <ul>
              <li v-html="t('help.post.li0')"></li>
              <li v-html="t('help.post.li1')"></li>
              <li v-html="t('help.post.li2')"></li>
              <li v-html="t('help.post.li3')"></li>
              <li v-html="t('help.post.li4')"></li>
            </ul>
          </div>

          <div class="topic-card">
            <div class="topic-icon message">
              <i class="bi bi-chat-dots-fill"></i>
            </div>
            <h3>{{ t('help.messages.title') }}</h3>
            <ul>
              <li v-html="t('help.messages.li0')"></li>
              <li v-html="t('help.messages.li1')"></li>
              <li v-html="t('help.messages.li2')"></li>
              <li v-html="t('help.messages.li3')"></li>
            </ul>
          </div>

          <div class="topic-card">
            <div class="topic-icon collab">
              <i class="bi bi-building"></i>
            </div>
            <h3>{{ t('help.collab.title') }}</h3>
            <ul>
              <li v-html="t('help.collab.li0')"></li>
              <li v-html="t('help.collab.li1')"></li>
              <li v-html="t('help.collab.li2')"></li>
              <li v-html="t('help.collab.li3')"></li>
            </ul>
          </div>

          <div class="topic-card">
            <div class="topic-icon edu">
              <i class="bi bi-mortarboard-fill"></i>
            </div>
            <h3>{{ t('help.edu.title') }}</h3>
            <ul>
              <li v-html="t('help.edu.li0')"></li>
              <li v-html="t('help.edu.li1')"></li>
              <li v-html="t('help.edu.li2')"></li>
              <li v-html="t('help.edu.li3')"></li>
              <li v-html="t('help.edu.li4')"></li>
            </ul>
          </div>

          <div class="topic-card">
            <div class="topic-icon security">
              <i class="bi bi-shield-check"></i>
            </div>
            <h3>{{ t('help.security.title') }}</h3>
            <ul>
              <li v-html="t('help.security.li0')"></li>
              <li v-html="t('help.security.li1')"></li>
              <li v-html="t('help.security.li2')"></li>
              <li v-html="t('help.security.li3')"></li>
              <li v-html="t('help.security.li4')"></li>
            </ul>
          </div>

        </div>

        <!-- Contact note -->
        <div class="contact-note">
          <i class="bi bi-envelope-fill"></i>
          <div>
            <strong>{{ t('help.contact.title') }}</strong>
            <p>{{ t('help.contact.desc') }}</p>
          </div>
          <button class="btn-faq" @click="router.push('/faq')">
            <i class="bi bi-question-circle"></i> {{ t('help.contact.btn') }}
          </button>
        </div>

      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.help-page {
  min-height: 100vh;
  background: #f0f2f5;
  padding: 28px 16px 48px;
}
.container {
  max-width: 960px;
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
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 18px rgba(14,165,233,.3);
}
.page-header h1 {
  margin: 0 0 4px;
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
}
.page-header p {
  margin: 0;
  color: #64748b;
  font-size: .9rem;
}

/* Topics */
.topics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 24px;
}
@media (max-width: 680px) {
  .topics-grid { grid-template-columns: 1fr; }
}
.topic-card {
  background: #fff;
  border-radius: 14px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.topic-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 12px;
}
.topic-icon.profile  { background: #ede9fe; color: #6366f1; }
.topic-icon.post     { background: #e0f2fe; color: #0284c7; }
.topic-icon.message  { background: #dcfce7; color: #16a34a; }
.topic-icon.collab   { background: #fef3c7; color: #d97706; }
.topic-icon.edu      { background: #fce7f3; color: #db2777; }
.topic-icon.security { background: #f0fdf4; color: #15803d; }
.topic-card h3 {
  font-size: .95rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 12px;
}
.topic-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.topic-card li {
  font-size: .83rem;
  color: #475569;
  line-height: 1.55;
  padding-left: 14px;
  position: relative;
}
.topic-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #6366f1;
  font-weight: 700;
}

/* Contact note */
.contact-note {
  background: #fff;
  border-radius: 14px;
  padding: 20px 22px;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,.04);
}
.contact-note > i {
  font-size: 1.6rem;
  color: #6366f1;
  flex-shrink: 0;
}
.contact-note strong {
  display: block;
  font-size: .9rem;
  color: #1e293b;
  margin-bottom: 3px;
}
.contact-note p {
  margin: 0;
  font-size: .82rem;
  color: #64748b;
  line-height: 1.55;
}
.btn-faq {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: 9px;
  border: 1.5px solid #6366f1;
  background: #fff;
  color: #6366f1;
  font-size: .84rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all .15s;
  flex-shrink: 0;
}
.btn-faq:hover { background: #6366f1; color: #fff; }
</style>
