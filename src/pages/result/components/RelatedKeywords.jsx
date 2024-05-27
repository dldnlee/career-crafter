import { useState, useEffect } from "react";
import { pb } from "src/data";
import { TitleText } from "./TitleText";

export function RelatedKeywords() {
  const [keywords, setKeywords] = useState([]);


  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));

    async function getKeywords() {
      const record = await pb.collection('users').getOne(`${currentUser.model.id}`);
      const keywords = JSON.parse(record.keywords);
      setKeywords(keywords);
    }

    getKeywords()
  }, [])


  return (
    <div className="flex flex-col gap-5">
      <TitleText text={'나의 관련 키워드'}/>
      <div className="">
        {
          keywords.map((item, idx) => {
            return (
              <p key={idx} className="px-4 py-1 mr-2 mb-2 inline-block text-white text-sm font-semibold w-fit rounded-full bg-blue-500">{item}</p>
            )
          })
        }
      </div>
    </div>
  )
}