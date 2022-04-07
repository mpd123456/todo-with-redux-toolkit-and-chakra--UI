import {Box, Input,Text, Select,Radio,RadioGroup,Stack} from '@chakra-ui/react'
import React from 'react';
import { useDispatch } from 'react-redux';
// import { searchFilterChange,statusFilterChange,priorityFilterChange } from '../../redux/actions';
import filtersSlice from './filtersSlice';



export default function Filters() {
  const dispatch=useDispatch()
  const [searchText,setSearchText]=React.useState('')
  const [filterStatus,setFilterStatus]=React.useState('All')
  const [filterPriorities,setFilterPriorities]=React.useState([])
  const handleSearchTextChange=(e)=>{
    console.log({e})
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value))
  }
  const handleStatusChange=(value)=>{
    // console.log({e})
    setFilterStatus(value)
    dispatch(filtersSlice.actions.statusFilterChange(value))
  }

  const handleProrityChange=(e)=>{
    // console.log({e})
    setFilterPriorities(e.target.value)
    dispatch(filtersSlice.actions.priorityFilterChange(e.target.value))
  }
  return (
    <>
    <Box justify='center'>
      <Text
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Text>
        <Input size='md' placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
      </Box>
      <Box>
        <Text
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Text>
        <RadioGroup onChange={handleStatusChange} value={filterStatus}>
        <Stack direction='row'>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
          </Stack>
        </RadioGroup>
        </Box>
      <Box>
        <Text
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Text>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriorities}
          onChange={handleProrityChange}
        >
          <option value='High' label='High'>
           High
          </option>
          <option value='Medium' label='Medium'>
            Medium
          </option>
          <option value='Low' label='Low'>
            Low
          </option>
        </Select>
        </Box>
        </>
  );
}
//   return (
//     <Row justify='center'>
//       <Col span={24}>
//         <Typography.Paragraph
//           style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
//         >
//           Search
//         </Typography.Paragraph>
//         <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
//       </Col>
//       <Col sm={24}>
//         <Typography.Paragraph
//           style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
//         >
//           Filter By Status
//         </Typography.Paragraph>
//         <Radio.Group value={filterStatus} onChange={handleStatusChange}>
//           <Radio value='All'>All</Radio>
//           <Radio value='Completed'>Completed</Radio>
//           <Radio value='Todo'>To do</Radio>
//         </Radio.Group>
//       </Col>
//       <Col sm={24}>
//         <Typography.Paragraph
//           style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
//         >
//           Filter By Priority
//         </Typography.Paragraph>
//         <Select
//           mode='multiple'
//           allowClear
//           placeholder='Please select'
//           style={{ width: '100%' }}
//           value={filterPriorities}
//           onChange={handleProrityChange}
//         >
//           <Select.Option value='High' label='High'>
//             <Tag color='red'>High</Tag>
//           </Select.Option>
//           <Select.Option value='Medium' label='Medium'>
//             <Tag color='blue'>Medium</Tag>
//           </Select.Option>
//           <Select.Option value='Low' label='Low'>
//             <Tag color='gray'>Low</Tag>
//           </Select.Option>
//         </Select>
//       </Col>
//     </Row>
//   );
// }
