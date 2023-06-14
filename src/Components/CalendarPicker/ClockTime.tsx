import React, { useState } from 'react';
import type { TimePickerProps } from 'antd';
import { Space, TimePicker } from 'antd';


type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'];
}) => {
  return <TimePicker placeholder='00:00:00' onChange={onChange} />;
};

const ClockTime: React.FC = () => {
  const [type, setType] = useState<PickerType>('time');

  return (
    <Space>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};

export default ClockTime;