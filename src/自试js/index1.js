import React from 'react';  
import ReactDOM from 'react-dom'; 
import 'antd/dist/antd.css'; 
import { DatePicker, message } from 'antd';  
import { Form, Icon, Input, Button,Select,Tooltip } from 'antd';
const FormItem = Form.Item;



function hasErrors(fieldsError) {

  console.log(fieldsError);
  console.warn(Object.keys(fieldsError).some(field => fieldsError[field]));

  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.error('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const pass2Error = isFieldTouched('pass2') && getFieldError('pass2');
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 20 },
    };


    const text = <div>
      <span>prompt text</span>
      <span>hehe</span>
    </div>;


    

    return (
      <Form 
      style={{ marginTop:20,marginLeft:20 }}
      layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        }
                  )
              (   

           <Tooltip 
           placement="bottom" 
           title={text}  
            trigger={['focus']}
            overlayClassName="numeric-input"
           >
      


                <Input prefix={ 
                        <Icon type="user" style={{ fontSize: 13 }} />} 
                        placeholder="Username" />
  </Tooltip>
              )
        }



        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

      <FormItem
           {...formItemLayout}
          label="Select"
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!'},
            ],
          })(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Select.Option value="red">Red</Select.Option>
              <Select.Option value="green">Green</Select.Option>
              <Select.Option value="blue">Blue</Select.Option>
            </Select>
          )}
    </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>

  



      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

ReactDOM.render(
  <WrappedHorizontalLoginForm />, 
  document.getElementById('root'));