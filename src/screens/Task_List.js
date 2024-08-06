import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'

import today_Image from "../../assets/imgs/today.jpg"

import Task from "../components/Task"

export default class TaskList extends Component {
    state = {
        tasks : [{
            id: Math.random, 
            description : "Estudar para a prova de DDM1",
            estimate_at : new Date(),
            done_at : new Date()
        },
        {
         id: Math.random, 
         description : "Fazer a prova de DDM1",
         estimate_at : new Date(),
         done_at : new Date()
         },
        {
        id: Math.random, 
        description : "Tarefa 3",
        estimate_at : new Date(),
        done_at : new Date()    
         }]
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                <FlatList>
                data = {this.state.tasks}
                </FlatList>
                
                    {/*<Task description={"terminar TCC"}
                        estimate_at={moment(new Date()).format('DD/MM/YYYY')}
                        done_at={moment(new Date())} />
                    <Task description={"apresentar TCC"}
                        estimate_at={moment(new Date()).add(5, "days")}
                        done_at={null} />
                    <Task description={"Tarefa 3"}
                        estimate_at={moment(new Date()).add(10, "days")}
                        done_at={moment(new Date())} />*/}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }
})





