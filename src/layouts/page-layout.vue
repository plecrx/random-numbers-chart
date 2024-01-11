<template>
    <div class="page-layout">
        <slot/>
    </div>
</template>

<style scoped lang="css">
.page-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    height: 100vh;
}
</style>