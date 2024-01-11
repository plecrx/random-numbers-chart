<template>
    <button class="button" type="button">
        <slot/>
    </button>
</template>

<style scoped lang="css">
.button {
    border-radius: 16px;
    border: none;
    padding: 20px 24px;
    font-weight: bold;
    background-color: indigo;
    color: floralwhite;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
}
</style>
