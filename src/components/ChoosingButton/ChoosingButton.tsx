import { Pressable,Text } from "react-native";

interface IChoosingButton{
    buttonTitle:string;
    onChoosingColor:string;
    onSelect:()=>void;
    isChoosed?:boolean;
}

const ChoosingButton=({buttonTitle,onSelect,onChoosingColor,isChoosed}:IChoosingButton)=>{

    return(
        <Pressable 
        onPress={onSelect} 
        style={{width:152.5,height:60,backgroundColor:(isChoosed?onChoosingColor:'white'),
        borderRadius:10,justifyContent:'center',alignItems:'center',display:'flex'}}>
            <Text style={{fontSize:16,color:isChoosed ?'#6A5AE0':'black'}}>{buttonTitle}</Text>
        </Pressable>
    )
}
export default ChoosingButton;