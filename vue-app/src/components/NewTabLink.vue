<template>
  <div>
    <!-- Pass the props value to the function when calling it -->
    <a :href="linkUrl" target="_blank" rel="noopener noreferrer">
      <slot></slot>
    </a>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Define the props first
const props = defineProps({
  routeName: {
    type: String,
    required: true,
  },
})

// Compute the full URL for the desired route
const linkUrl = computed(() => {
  // Use props.routeName to access the dynamic value
  const route = router.resolve({
    name: props.routeName,
    // Add dynamic parameters if needed, e.g.:
    // params: { id: someDynamicId.value }
  })
  const match = route.href.match(/^(\/react-vs-vue)(\/vue)(\/.*)?$/)
  const vueSubPath = match?.[1] + '/#' + match?.[2] + match?.[3] || '/'
  // route.href contains the resolved path (e.g., "/my-route/123")
  return vueSubPath
})
</script>
