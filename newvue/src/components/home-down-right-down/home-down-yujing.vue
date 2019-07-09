<template>
	<div class="yuJingBox">
		<table width="100%">
            <tbody>
			    <tr>
                    <td align="center" style="font-size: 18px;">预警等级介绍</td>
                </tr>
            </tbody>
		</table>
		<hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
		<table class="layui-table">
                <thead>
                    <tr>
                        <th>预警等级</th>
                        <th>预警颜色</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td align="center">
                            一级预警</td>
                        <td align="center">
                            <span style="color:#F00">一级预警颜色</span>
                        </td>
                        <td>存在症状且症状严重，需要马上就诊</td>
                    </tr>
                    <tr>
                        
                        <td align="center">二级预警</td>
                        <td align="center">
                            <span style="color:#90F">二级预警颜色</span>
                        </td>
                        <td>存在症状且症状严重，自己不能调节</td>
                    </tr>
                    <tr>
                        
                        <td align="center">三级预警</td>
                        <td align="center">
                            <span style=" color:#F60">三级预警颜色</span>
                        </td>
                        <td>可能存在症状，但是不严重，自己可以调节</td>
                    </tr>
                    <tr>
                        
                        <td align="center">四级预警</td>
                        <td align="center">
                            <span style="color:#0F0">四级预警颜色</span>
                        </td>
                        <td>没有症状</td>
                    </tr>
                </tbody>
            </table>
			<table width="100%">
                <tbody>
					<tr>
                        <td align="center" style="font-size: 18px;">预警分级说明</td>
                    </tr>
                </tbody>
			</table>
			<hr style="height:1px;border:none;border-top:1px dashed #0066CC;">
			
			<table width="100%" align="center" bgcolor="#CCFFFF" style="font-size: 16px;">
                <tbody>
				    <tr>
                        <td><table width="90%" align="center">
                <tbody>
	            <tr>
    <td width="80%"><p>预警一级--高危对象，需要立即予以干预和监控：</p>
            <p>1.精神障碍患者；</p>
            <p>2.情绪低落、长期抑郁等，中度以上抑郁症、躁狂症患者；</p>
            <p>3.遭受自然灾害、暴力、绑架、强奸等重大创伤事件并出现创伤后应激症状者；</p>
            <p>&nbsp;</p>
<br><br>
            <p>预警二级--重点对象。立即进行约访，明确危机评估与干预：</p>
            <p>1.曾谈论过自杀，直接或间接有过自杀、出走的暗示或威胁，亲友中有自杀行为或自杀意图者；</p>
            <p>2.具有明显的外部精神刺激，如考试多门不及格、评优落选、竞选受挫、失恋、家庭纠纷、人际关系危机、严重的身体疾患等，并有强烈的心理冲突或心理症状体验者；</p>
            <p>3.自责自罪、有强烈的罪恶感和无用感、缺乏家庭温暖、父母离异、被人遗弃、家庭经济困难等，中度以下抑郁症患者； </p>
            <p>4.经过治疗已复学的精神病患者，或曾有过精神障碍的心理疾病边缘的在校学生；
</p>
            <p>&nbsp;</p>
<br><br>
            <p>预警三级--关注对象 ，需要进行积极的关注和引导，必要时预约心理咨询</p>
            <p>1.UPI测试辅助题中有一题做肯定选择者</p>
            <p>2.UPI测试时，总分在20分至25分（包括20分，不包括25分）之间者存在一般心理问题</p>
<br><br>
            <p>预四一级--监测对象（正常人群），需要监测的群体，只要有需要，立即安排心理诊断或心理咨询。</p>
            <br><br><br><br>
          </td>
  </tr>
</tbody>
</table>
</td>
  </tr>
          </tbody>
</table>
	</div>
</template>

<script>
	export default{
		name:"home-down-yujing"
	}
</script>

<style >
	.yuJingBox{
		width: 100%;
		height: 100%;
	}
	.yuJingBox table{
		margin-top:20px ;
	}
</style>
