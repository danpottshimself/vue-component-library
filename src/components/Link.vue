<template>
    <div :class="['link', { 'secondary': secondary }]" @click="linkAction(linkUrl)">
        {{linkText}}
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class Link extends Vue {
    @Prop()
    protected linkAction!: () => void;

    @Prop()
    protected linkText!: string;

    @Prop()
    protected linkUrl!: string;

    @Prop()
    protected secondary!: boolean;
}
</script>
<style lang="less" scoped>
    .link {
        cursor: pointer;
        display: flex;
        flex-flow: row;
        flex-wrap: nowrap;
        max-width: 500px;
        color: #f574f5;
        font-size: 1.5rem;
        line-height: 1rem;
        justify-content: center;
        text-decoration: none;
        text-align: left;
        font-family: Lato, Helvetica, Arial, 'DejaVu Sans', 'Liberation Sans', Freesans, sans-serif;

        &.secondary {
            color: #F247;
        }
    }
</style>
