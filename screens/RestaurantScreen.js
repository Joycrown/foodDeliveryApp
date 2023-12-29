import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant, selectRestaurant} from '../slices/restaurantSlice';

export default function ResturantScreen() {
    const {params} =useRoute()
    const navigation = useNavigation();
    let item = params;
    const dispatch = useDispatch()
    useEffect(()=>{
        if(item && item.id){
            dispatch(setRestaurant({...item}))
        }
    },[])

    // let dispatch = useDispatch();
    // const {params: {
    //     id, 
    //     title,
    //     imgUrl,
    //     rating,
    //     type,
    //     address, 
    //     description,
    //     dishes,
    //     lng,
    //     lat
    // }} = useRoute();
    // useLayoutEffect(()=>{
    //     navigation.setOptions({headerShown: false})
    // },[])
    // useEffect(()=>{
    //     if(resturant && resturant.id!=id){
    //         dispatch(emptyBasket());
    //     }
    //     dispatch(setResturant({
    //         id, 
    //         title,
    //         imgUrl,
    //         rating,
    //         type,
    //         address, 
    //         description,
    //         dishes,
    //         lng,
    //         lat
    //     }))
    // },[])
  return (
    <>
        <CartIcon/>
        <StatusBar style ='light'/>
        <ScrollView  >
            <View className="relative">
                <Image className="w-full h-72" source={item.image} />
                <TouchableOpacity 
                    onPress={()=>navigation.goBack()} 
                    className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                    <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                </TouchableOpacity>
            </View>
            <View 
                style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} 
                className="bg-white -mt-12 pt-6">
                <View className="px-5">
                    <Text className="text-3xl font-bold">{item.name}</Text>
                    {/* copy this code from restaurant card */}
                    <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-xs">
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
                </Text>
            </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="gray" width={15} height={15} />
                    <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
                </View>
                    <Text className="text-gray-500 mt-2">{item.description}</Text>
                    
                    
                </View>
                
            </View>
            <View className="pb-36 bg-white">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                {/* dishes */}

                {
                    item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index}/>)
                }
                {/* {
                    dishes.map(dish=>{
                        return (
                            <DishRow 
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={dish.image}
                            />
                        )
                    })
                } */}
            </View>
      
        </ScrollView>
    </>
    
  )
}