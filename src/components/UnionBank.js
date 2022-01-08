import React from 'react'
import Andhrabank from './Andhrabank'
import Corporatebank from './Corporatebank'

export default function UnionBank() {
    return (
        <div>
            <Andhrabank location="vizag"/>
            <Corporatebank  location="kavali"/>
        </div>
    )
}
