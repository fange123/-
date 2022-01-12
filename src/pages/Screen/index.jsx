import React,{useState,useEffect} from 'react';
import styles from './index.less';
import '@/utils/flexible'

import moment from 'moment';

const Screen = () => {


const [currentTime, setCurrentTime] = useState(moment().format('YYYY/MM/DD日-HH:mm:ss秒'))

useEffect(() => {
  const time = setInterval(()=> {
    setCurrentTime(moment().format('YYYY/MM/DD日-HH:mm:ss秒'))
  },1000)

  return ()=> { clearInterval(time)}
}, [])

  return (
    <div className={styles.container}>
      {/* 头部 */}
        <header >
          <h1>XX大屏</h1>
          <span >当前时间：{currentTime}</span>
        </header>
      {/* 内容 */}
      <main  />

    </div>
  );
};

export default Screen;
