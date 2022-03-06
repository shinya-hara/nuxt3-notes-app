<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Nuxt3 Notes App
        </q-toolbar-title>
        <q-btn
          href="https://github.com/shinya-hara/nuxt3-notes-app"
          target="_blank"
          flat
          round
          dense
          icon="mdi-github"
        >
          <q-tooltip>Visit GitHub</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container class="container">
      <slot />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 30px;
}
</style>
