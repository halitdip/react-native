import { Pressable, StyleSheet, View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLogout } from '../redux/userSlice';
import loginServices from '../services/main/loginServices';


const Item = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{item.age} - {item.university}</Text>
    </View>
);


const HomePage = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState([]);
    const [test, setTest] = useState('');

/* 
    useEffect(() => {

        const fetchData = async () => {
            await loginServices.deneme()
            .then(res=>{
                setUserData(res.data.users);
            }).catch(err=>{
                setUserData([]);
                alert(err)
            })
        };

        fetchData();
    }, []); */

    return ( 
        <View> 
              <Pressable onPress={() => dispatch(setLogout(false))}>
                <Text>
                    Çıkış Yap
                </Text>
            </Pressable>
            
            <FlatList
                data={userData}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
          
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})