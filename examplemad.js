import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button,Image} from 'react-native';
  
  class LockScreenPassCode extends Component{
    constructor(props){
      super(props);
      this.state = {
        passcode: ['','','',''],
        textValue: (
          <>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}> Enter your PIN code </Text>
          </View>
        </>
        ),
      };
    }
  
  
    _onPressNumber = num =>{
      let tempCode = this.state.passcode;
      for(var i = 0; i < tempCode.length; i++){
        if(tempCode[i]===''){
          tempCode[i]=num
          console.log('if part of pressing number')
          console.log(num)
          if (tempCode[3]===4){
            console.log("success")
            this.validatePin()
          }else{
            if(tempCode[0]!='' && tempCode[1]!=''&&tempCode[2]!='' && tempCode[3]!=''){
              console.log('wrong pin')
              console.log(tempCode.length)
              this.validatePin()
            }
          }
          break
        }else{
          console.log('else part of pressing number')
          console.log(tempCode)
          this.setState({
            textValue:(
              <>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.title}> Enter your PIN code</Text>
                </View>
              </>
            ),
            
    
          })
          let emptyPin= ['','','','']
          this.setState({passcode:emptyPin})
          continue
        }
      }
      this.setState({passcode: tempCode})
    }
  
    _onPressCancel = ()=>{
      let tempCode = this.state.passcode;
      for(var i = tempCode.length-1; i >=0; i--){
        if(tempCode[i]!=''){
          tempCode[i]=''
          break
        }else{
          continue
        }
      }
      this.setState({passcode: tempCode})
    }
  
    validatePin = ()=>{
      let myPin = [1, 2, 3, 4]
      let enteredPin = this.state.passcode
     
      if (myPin.toString() === enteredPin.toString()){
        console.log(myPin)
        console.log(enteredPin)
        console.log('if part of validatePin')
        Alert.alert('Success! App will redirect you to the home now!')
      }else{
        let emptyPin= ['','','','']
        this.setState({passcode:emptyPin})
        console.log(myPin)
        console.log(enteredPin)
        console.log('else part of validatePin')
        this.setState({
          textValue:(
            <>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.title2}> Enter your PIN code{'\n'}Please try again </Text>
              </View>
            </>
          ),
  
        })
  
      }
    }
  
    render(){
      let numbers = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
        {id:9},
        {id:0}
      ]
      return(
        <View style={{marginTop: 75}}>
          <View style={{paddingTop: 25}}>
          <Text>{this.state.textValue}</Text>
          {/* <Button title="Change Text" onPress={this.onPress} /> */}
        </View>
          {/* <View>
            <Text style= {styles.title}>Enter your PIN Code</Text>
          </View> */}
          <View style={styles.codeContainer}>
            {
              this.state.passcode.map(p=>{
                let style = p != ''? styles.code2: styles.code
                return <View style ={style}></View>
              })
            }
          </View>
          <View style={styles.numbersContainer}>
            {numbers.map(num=>{
              return (
                <TouchableOpacity 
                  style={styles.number} 
                  key={num.id} 
                  onPress={()=>this._onPressNumber(num.id)}>
                    <Text style={styles.numberText }>{num.id}</Text>
                </TouchableOpacity>
              )
            })}
            
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>this._onPressCancel()}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity activeOpacity = {0.5} style={styles.buttons} onPress={()=>this.validatePin()}>
              <Text style={styles.buttonText}>validatePin</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.imageContainer}>
          <Image
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
            source={require('../assets/Images/backspace.png')}
            // source={{ uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fus.123rf.com%2F450wm%2Fadynyoman%2Fadynyoman2010%2Fadynyoman201002360%2F156916230-backspace-key-vector-icon-symbol-keyboard-isolated-on-white-background.jpg%3Fver%3D6&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fbackspace_key.html&tbnid=RbP9634zN9zwtM&vet=12ahUKEwi0sdXL2L_5AhW9jtgFHcF_CKUQMyg2egQIARBO..i&docid=UU2Lr5UW0XqfjM&w=450&h=450&q=backspace%20icon%20gray%20background&ved=2ahUKEwi0sdXL2L_5AhW9jtgFHcF_CKUQMyg2egQIARBO' }}
          />
        </View> */}
        </View>
      )
    }
  }
  
  export default LockScreenPassCode;
  
  const styles = StyleSheet.create({
    container: {
      flex:1
    },
    codeContainer:{
      marginTop:70,
      flexDirection: 'row',
      alignItems: 'center',
      width:383,
      height:10,
      // margin: 8,
      justifyContent: "center",
      left:20
    },
    code:{
      width:13,
      height:13,
      borderRadius:13,
      borderWidth:1,
      borderColor:'black',
      margin:5
    },
    code2:{
      width:13,
      height:13,
      borderRadius:13,
      borderWidth:1,
      backgroundColor:'gray',
      margin:5
    },
    numbersContainer:{
      marginTop:30,
      marginLeft:20,
      width:383,
      height:400,
      flexDirection: 'row',
      flexWrap:'wrap',
      // backgroundColor:'gray',
      justifyContent:'center',
    },
    number:{
      width:80,
      height:80,
      borderRadius:80,
      margin: 8,
      backgroundColor:'cyan',
      justifyContent:'center',
      alignItems:'center'
    },
    numberText:{
      fontSize: 36,
      textAlign: "center",
      color:'blue',
      letterSpacing:0,
      fontFamily: "Roboto",
    },
    buttons:{
    },
    title: {
      fontFamily: 'Roboto',
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'gray',
      left: 80,
      justifyContent: 'space-between'
    },
    title2: {
      fontFamily: 'Roboto',
      fontSize: 25,
      textAlign: 'center',
      lineHeight:30,
      letterSpacing:0.34,
      color: 'red',
      left:85
    },
    imageContainer: {
      backgroundColor: '#7CA1B4',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })