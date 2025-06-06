import type { IProperty } from '@/models/Reservation'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePropertyStore = defineStore('propertyStore', () => {
  const properties = ref<IProperty[]>([
    {
      id: null,
      title: null,
      price: null,
      status: null,
      created_at: null,
    },
  ])

  function getPropertyById(id: number) {
    const property = properties.value.find((property) => property.id === id)
    return property ? property : null
  }

  function addProperty(propertyData: IProperty) {
    const currentDate = new Date().getTime()
    const id = currentDate
    const property = {
      ...propertyData,
      id,
    }
    properties.value.unshift(property)
  }

  function deleteProperty(id: number) {
    properties.value = properties.value.filter((property) => property.id !== id)
  }

  function updatePropertyById(id: number, newContent) {
    const property = properties.value.find((property) => property.id === id)
    if (property) {
      property.content = newContent.content
    }
  }

  return {
    properties,
    getPropertyById,
    addProperty,
    deleteProperty,
    updatePropertyById,
  }
})
