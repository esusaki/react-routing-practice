import React from "react";

function Aboutme(){
    return (
        <div>
            <table border={1} style={{"margin":"auto"}}>
                <tr>
                    <td>好きな食べ物</td>
                    <td>かまぼこ</td>
                </tr>
                <tr>
                    <td>好きなプリキュア</td>
                    <td>キュア・レモネード</td>
                </tr>
                <tr>
                    <td>好きな家族</td>
                    <td>妹</td>
                </tr>
                <tr>
                    <td>今まで入ったことがある部活</td>
                    <td>
                        <ul style={{"textAlign":"left"}}>
                            <li>家庭科クラブ</li>
                            <li>絵画クラブ</li>
                            <li>演劇部</li>
                            <li>新聞部</li>
                            <li>お笑いサークル</li>
                            <li>プログラミングサークル</li>
                        </ul>

                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Aboutme;