// components/ReviewForm.js
import { Form, Input, Button } from 'antd';

const ReviewForm = () => {
  const onFinish = (values: any) => {
    // Handle review submission
    console.log('Received values:', values);
  };

  return (
    <Form name="review-form" onFinish={onFinish}>
      <Form.Item name="rating" label="Rating">
        {/* Add your rating input component here */}
      </Form.Item>
      <Form.Item name="comment" label="Comment">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{backgroundColor: "#612ba7"}}>
          Submit Review
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
