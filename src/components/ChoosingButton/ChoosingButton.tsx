import { Pressable,Text } from "react-native";

interface IChoosingButton{
    buttonTitle:string;
    onSelectColor:string;
    onSelect:()=>void;
    isSelected?:boolean;
}

const ChoosingButton=({buttonTitle,onSelect,onSelectColor,isSelected}:IChoosingButton)=>{

    return(
        <Pressable
        onPress={onSelect} 
        style={{width:152.5,height:60,backgroundColor:(isSelected?onSelectColor:'white'),
        borderRadius:10,justifyContent:'center',alignItems:'center',display:'flex'}}>
            <Text style={{fontSize:16,color:isSelected ?'black':'#6A5AE0'}}>{buttonTitle}</Text>
        </Pressable>
    )
}
export default ChoosingButton;