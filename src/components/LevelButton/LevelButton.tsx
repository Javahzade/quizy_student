import { Pressable,Text } from "react-native";

interface ILevelButton{
    buttonTitle:string;
    onSelectColor:string;
    onSelect:()=>void;
    isSelected?:boolean;
}

const LevelButton=({buttonTitle,onSelect,onSelectColor,isSelected}:ILevelButton)=>{

    return(
        <Pressable 
        onPress={onSelect} 
        style={{width:98,height:60,backgroundColor:(isSelected?onSelectColor:'white'),
        borderRadius:10,justifyContent:'center',alignItems:'center',display:'flex'}}>
            <Text style={{fontSize:16,color:isSelected ?'#6A5AE0':'black'}}>{buttonTitle}</Text>
        </Pressable>
    )
}
export default LevelButton;