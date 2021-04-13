import React, { PureComponent } from 'react';
import {DatePicker, List} from "@ant-design/react-native";

interface IMyDatePicker {
    mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
    // minDate?: Date;
    // maxDate?: Date;
    onChange?: (value: Date) => void;
    defaultDate?: Date;
    format?: string | ((value: Date) => string);
    extra?: string;
    minuteStep?: number;
    title?:React.ReactNode;
    arrow?:'horizontal' | 'down' | 'up' | 'empty' | '';
}

interface IMyDatePickerState {
    value:Date;

}

/**
 * 日期选择器
 */
class MyDatePicker extends PureComponent<IMyDatePicker,IMyDatePickerState> {

    static defaultProps = {
        mode:"date",
        defaultDate:new Date(),
        onChange:value=>{},
        format:"YYYY-MM-DD",
        extra:'请选择',
        minuteStep:1,
        arrow:'horizontal',
        title:''
    }

    state={
        value:undefined
    }

    onChange=(value)=>{
        console.log(value)
        this.setState({value})
        const {onChange}=this.props
        !!onChange&&onChange(value)
    }

  render() {
        const {value}=this.state;
        const {mode,defaultDate,minuteStep,minDate,format,extra,maxDate,title,arrow}=this.props
    return (
        <List>
            <DatePicker
                value={value}
                mode={mode}
                defaultDate={defaultDate}
                onChange={this.onChange}
                format={format}
                extra={extra}
                minuteStep={minuteStep}
            >
                <List.Item arrow={arrow}>{title}</List.Item>
            </DatePicker>
        </List>
    );
  }
}

export default MyDatePicker;
