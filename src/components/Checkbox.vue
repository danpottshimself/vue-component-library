<template>
<div class="checkbox-container">
    <div class="hit-area" @click="toggleSelected">
        <input type="checkbox" :name="checkboxText" v-model="selected" :disabled="disabled"/>
        <div class="checkbox-text">{{checkboxText}}</div>
        <div class="checkbox" :class="{ 'checkbox-ticked': selected, 'disabled': disabled }"></div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class Checkbox extends Vue {
    @Prop()
    protected checkboxText!: string;

    @Prop()
    protected disabled!: boolean;

    @Prop()
    protected selected!: boolean;

    public toggleSelected(): void {
        if (!this.disabled) {
            this.$emit('checkbox-selected', !this.selected);
        }
    }
}
</script>
<style lang="less">
@import (once) "node_modules/lesshat/lesshat.less";

.border-radius-combined(@radius) {
  .border-radius(@radius);
  .border-top-right-radius(@radius);
  .border-bottom-right-radius(@radius);
  .border-bottom-left-radius(@radius);
  .border-top-left-radius(@radius);
  .background-clip(border-box);
}

.checkbox-container {
    max-width: 500px;
    margin: 15px 0;
    color: #000000;
    font-family: Lato, Helvetica, Arial, 'DejaVu Sans', 'Liberation Sans', Freesans, sans-serif;

    .checkbox,
    .checkbox-text {
        display: inline-block;
    }

    .checkbox-text {
        vertical-align: 1rem;
        margin-left: 0.5rem;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    .checkbox {
        background-color: #FFFFFF;
        width: 2.2rem;
        height: 2.2rem;
        .border-radius-combined(0.5rem);

        &.checkbox-ticked {
            background-image: data-uri('../assets/tick.png');
            background-repeat: no-repeat;
            background-size: 2.2rem;
            background-position-y: 0.15rem;
        }
    }

    .hit-area {
        display: flex;
        padding: 0;
        margin: 0;
        height: 2.2rem;
        align-items: center;
    }
}

</style>
