<script setup lang="ts">
useTitle(
  'About',
  'Full-stack engineer with 20+ years building web products. I work across the stack, care about performance and developer experience, and enjoy mentoring and open source.',
)

const cards = [
  {
    icon: 'tabler-sparkles',
    title: 'Code Quality & Mentorship',
    description: 'I focus on writing clean, maintainable code and ensuring high standards for code quality. I also enjoy mentoring and sharing knowledge with others.',
  },
  {
    icon: 'tabler-user',
    title: 'User & Developer Experience',
    description: 'I prioritize both user and developer experience by creating intuitive interfaces and efficient development workflows.',
  },
  {
    icon: 'tabler-gauge',
    title: 'Security & Performance',
    description: 'Security by default and performance optimization are key priorities in my development approach.',
  },
]
</script>

<template>
  <u-page>
    <u-theme
      :ui="{
        pageSection: {
          header: 'lg:grid lg:grid-flow-col lg:grid-cols-[auto_1fr] lg:grid-rows-[repeat(2, min-content)]',
          headline: 'lg:justify-start',
          title: 'lg:text-start',
          description: 'lg:col-start-2 lg:row-span-2 lg:text-end',
        },
      }"
    >
      <u-page-hero
        title="About Me"
        orientation="horizontal"
        class="bg-hero"
        :ui="{
          container: 'lg:flex sm:flex-row',
        }"
      >
        <template #headline>
          <app-status-badge />
        </template>
        <template #description>
          Full-stack engineer with 20+ years building web products. I work across the stack, care about performance and developer experience, and enjoy mentoring and open source.
        </template>
        <u-avatar
          size="3xl"
          src="/avatar.jpeg"
          alt="Rafa Soares"
          class="sm:rotate-4 size-full md:size-36 lg:size-48 rounded-lg shadow-lg order-first md:order-last self-center-safe"
        />
      </u-page-hero>
      <u-page-section
        id="experience"
        headline="Track Record"
        title="Career Milestones & Roles"
        description="A timeline of technical leadership, deep individual contribution, and zero-downtime platform modernizations."
      >
        <about-experiences />
      </u-page-section>
      <u-page-section
        id="philosophy"
        headline="Core Ethos"
        title="Engineering Philosophy"
        description="Software trends come and go. These core tenets define how I approach every codebase, architecture choice, and engineering team."
        class="bg-muted/50"
      >
        <u-page-grid>
          <u-page-card
            v-for="card in cards"
            :key="card.title"
            v-bind="card"
            variant="subtle"
            class="hover:bg-elevated transition-colors duration-200"
          />
        </u-page-grid>
      </u-page-section>
      <contact-banner />
    </u-theme>
  </u-page>
</template>
