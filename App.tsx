import {View} from 'react-native';
import {Icons} from './components/Icons';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#2c3e50',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <View style={{
        flexDirection:'row',
        marginBottom: 20
      }}>
        <Icons.bird stroke={'#16a085'} width={70} height={70} style={{margin:5}}/>
        <Icons.squirrel stroke={'#2980b9'} width={70} height={70} style={{margin:5}}/>
        <Icons.snail stroke={'#8e44ad'} width={70} height={70} style={{margin:5}}/>
      </View>

      <Icons.trees width={80} height={80} stroke={'#FFF'} />

      <View style={{
        flexDirection:'row',
        marginTop: 20
      }}>
        <Icons.rabbit stroke={'#f39c12'} width={70} height={70} style={{margin:5}}/>
        <Icons.rat stroke={'#d35400'} width={70} height={70} style={{margin:5}}/>
        <Icons.turtle stroke={'#c0392b'} width={70} height={70} style={{margin:5}}/>
      </View>
    </View>
  );
}