<template>
  <tbody :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </tbody>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'table-body',

    /**
     * The element name of the component.
     */
    element: 'body',

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
