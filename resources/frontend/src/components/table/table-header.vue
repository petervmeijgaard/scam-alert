<template>
  <thead :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </thead>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'table-header',

    /**
     * The element name of the component.
     */
    element: 'header',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],
  };
</script>
