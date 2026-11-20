<template>
  <u-page-section>
    <u-page-card
      spotlight
      orientation="horizontal"
      title="Let's build something together."
      description="Whether you are planning a technical migration, designing a Greenfield full-stack architecture, or need senior perspective on an existing Rails or Vue/Nuxt system, I am open for consultation."
      variant="subtle"
      class="
        shadow-md
        hover:shadow-xl hover:ring-default hover:scale-105 hover:bg-elevated
        duration-300
        [--spotlight-size:800px]
        not-hover:[--spotlight-x:100%]! not-hover:[--spotlight-y:100%]!
      "
      :class="$style.banner"
      :ui="{
        container: 'lg:flex sm:flex-row',
        title: 'sm:text-2xl',
        description: 'sm:text-base mt-4',
      }"
      to="/contact"
    >
      <u-button
        block
        icon="tabler-mail"
        size="xl"
        class="w-max"
      >
        Get in Touch
      </u-button>
    </u-page-card>
  </u-page-section>
</template>

<style lang="postcss" module>
@property --spotlight-x {
  syntax: '<length-percentage>';
  inherits: true;
  initial-value: 0px;
}

@property --spotlight-y {
  syntax: '<length-percentage>';
  inherits: true;
  initial-value: 0px;
}

.banner {
  transition-property: all, --spotlight-x, --spotlight-y;
}
</style>
