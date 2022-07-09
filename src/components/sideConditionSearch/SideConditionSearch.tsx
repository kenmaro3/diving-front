import React from 'react'
import "./sideconditionsearch.scss"
import PrefectureSelect from '../../components/prefecturSelect/PrefectureSelect';
import FeatureSelect from '../../components/featureSelect/FeatureSelect';

function SideConditionSearch() {
  return (
    <div className="sideConditionSearchContainer">

      <PrefectureSelect className="buttonContainer">
        <button className='button button2'>都道府県から探す</button>
      </PrefectureSelect>

      <FeatureSelect className="buttonContainer">
        <button className='button button3'>特徴から探す</button>
      </FeatureSelect>
      <div className="keywordContainer">
        <input type="text" placeholder='キーワード'/>
      </div>

      <div className="submitContainer">
        <input type="submit" value="検索"/>
      </div>
    </div>
  )
}

export default SideConditionSearch