import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { themeColors } from '../theme';
import { categories } from '../constants';

export default function Categories() {

    const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
          // className="p-4"
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{
            paddingHorizontal: 15
          }}
      >
          {
            categories?.map(category=>{
              let isActive = category.id==activeCategory;
              let btnClass = isActive? ' bg-gray-600': ' bg-gray-200';
              let textClass = isActive? ' font-semibold text-gray-800': ' text-gray-500';
              return(
                <View key={category.id} className="flex justify-center items-center mr-6">
                  <TouchableOpacity 
                    onPress={()=> setActiveCategory(category.id)} 
                    className={"p-2 rounded-full shadow"+ btnClass}>
                    <Image style={{width: 40, height: 40}} source={category.image} 
                    />
                  </TouchableOpacity>
                  <Text className={"text-sm "+textClass}>{category.name}</Text>
                </View> 
              )
            })
          }
        
      </ScrollView>
    </View>
  )
}