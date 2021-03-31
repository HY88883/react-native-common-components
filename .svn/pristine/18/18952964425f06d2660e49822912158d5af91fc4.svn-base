import React, {PureComponent} from 'react';
import {StyleProp, TextStyle,} from 'react-native';
import {Checkbox, List} from '@ant-design/react-native';

const CheckboxItem = Checkbox.CheckboxItem;

interface IMyCheckbox {
    list:Array<Record<string | number | symbol, any>>;
    keyIndex?:string|number| symbol;
    titleIndex?:string|number| symbol;
    checkboxStyle?:StyleProp<TextStyle>;
    onChange?: (checked: boolean,item:object,index:number) => void;
}

const MyCheckbox = (props: IMyCheckbox) => {
    const {list,keyIndex,titleIndex,checkboxStyle,onChange}=props
    return (
        <List>
            {
                Array.isArray(list)&&list.map((item,index)=>(
                    <CheckboxItem
                        key={item[keyIndex]||index}
                        onChange={event => {
                            !!onChange&&onChange(event.target.checked,item,index)
                        }}
                        checkboxStyle={checkboxStyle}
                    >
                        {item[titleIndex]}
                    </CheckboxItem>
                ))
            }
        </List>
    );
}

MyCheckbox.defaultProps = {
    keyIndex:'keyIndex',
    titleIndex:'titleIndex',
    checkboxStyle:{},
    onChange:(params,item,index)=>{}
}

export default MyCheckbox;
