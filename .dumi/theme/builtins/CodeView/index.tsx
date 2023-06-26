// Foo.tsx
import { useTabMeta } from 'dumi'
import React, { type FC } from 'react'
interface Props {
  path: string
}
const CodeView: FC<Props> = (props) => {
  const assets = useTabMeta()
  console.log({ assets })

  return <h1>当前 barValue 属性值为：{props.path}</h1>
}

export default CodeView
