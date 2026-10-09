<template>
  <div class="flex justify-between items-center p-3">
    <div class="flex items-center">
      <n-avatar
        round
        :size="48"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <div class="ml-4 font-bold">
        <p class="text-sm text-gray-500">Admin</p>
        <p class="text-lg">Almat</p>
      </div>
    </div>
    <n-button>
      <template #icon>
        <BaseIcon name="logout" />
      </template>
      Выйти
    </n-button>
  </div>
</template>
