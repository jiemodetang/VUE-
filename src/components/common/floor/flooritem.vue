<template>
    <div class="flooritem">
		<div>
		<div style="height:44px;">
		<sticky
			scroll-box="vux_view_box_body"
			ref="sticky"
			:offset="46"
			:check-sticky-support="false"
			>
			<tab :line-width="1">
			<tab-item selected>爆款</tab-item>
			<tab-item >其他</tab-item>
			
			</tab>
		</sticky>
			</div>
		
		</div>
    <div id="fl">
			<div class="l_bar">
				<div v-for="(item,idx) in lbars" class="litem" :key="idx" @click="cli($event)"  :data-idx="idx">
					<div :data-idx='idx' class="pritem " v-bind:class="curIdx==idx?'active':''" @click="lbarClick">{{item.name}}</div>
					<div v-for="(clItem,cidx) in item.children" class="cleftitem" :data-cidx="cidx" v-bind:class="cCurIdx==cidx?'active':''" v-show="curIdx==idx" :key="cidx" @click="lcbarClick">
						{{clItem.name}}
					</div>
				</div>
			</div>
			<div class="r_bar" id="zz-scroll">
				<div>
						<div v-for="(item,idx) in rbars" class="ritem" :key="idx" :ref="idx">
					<div class='ritem_l' @click='detailClick'>
						<img :src="item.img" />
					</div>
					<div class='ritem_r'>
						<div class='title twoline'>{{item.title}}{{item.spec}}</div>
						<div class='status'>
							<span v-for='(sts,index) in item.status' :key='index'>{{sts}}</span>
						</div>
						<div class='desc'>
							<div class='price'>
								<span class='pri'>￥{{item.price}}</span>
								<span class='orig'>￥{{item.orig}}</span>
							</div>
							<!--v-show="item.count>0"-->
							<div class='count'>
								<span class='bor jian' :data-idx='idx' v-show="item.count>0" @click='jianClick'>-</span>
								<span class='num' v-show="item.count>0">{{item.count}}</span>
								<span class='bor jia' :data-idx='idx' @click='jiaClick'>+</span>
							</div>
						</div>
					</div>
				</div>
					<div class="zbar " ref="0">
					111111111111111111111111  
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
						<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					</div>
					<div class="zbar " ref="1">
					222222222222
					<br>
					<br>
					<br>
					<br>	<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					</div>
					<div class="zbar " ref="2">
						33333333333333333333333333
					<br>
					<br>
					<br>
					<br>
						<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br> 
					<br>
						<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br>
					<br> 
					<br>
					</div>
					
				</div>
			</div>

		</div>
	
		
    </div>
</template>


<script type="text/javascript">
import { Tab, TabItem, Sticky } from 'vux'
import BScroll from 'better-scroll'
export default{
	 components: {
		   	Tab,
			TabItem,
			Sticky
		},
    data(){
        return{
			
            lbars: [{
                        id: 1,
                        name: '今日推荐',
                        children: [{
                                id: 10,
                                name: '学React',
                            },
                            {
                                id: 11,
                                name: '学Vue',
                            },
                            {
                                id: 12,
                                name: '自闭',
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: '学React',
                        children: [{
                                id: 10,
                                name: '很困',
                            },
                            {
                                id: 11,
                                name: '难受',
                            },
                            {
                                id: 12,
                                name: '想哭',
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: '学Vue',
                        children: [{
                                id: 10,
                                name: '舒服',
                            },
                            {
                                id: 11,
                                name: '干净',
                            },
                            {
                                id: 12,
                                name: '优雅',
                            }
                        ]
                    },
            
                ],
                curIdx: 0,
                cCurIdx: 0,
                rbars: [{
                        img: 'http://img.alicdn.com/imgextra/i2/1991878393/O1CN01Gj6IBY2Bs2eVrpcGO_!!1991878393.jpg_760x760.jpg',
                        title: '天天吃鸡',
                        spec: '10g*100',

                        price: '60.00',
                        orig: '70.00',
                        stock: 30000,
                        count: 0
                    },
                    {
                        img: 'http://img.alicdn.com/imgextra/i2/1991878393/O1CN01Gj6IBY2Bs2eVrpcGO_!!1991878393.jpg_760x760.jpg',
                        title: '天天吃鸡',
                        spec: '1kg',
              
                        price: '6.00',
                        orig: '7.00',
                        stock: 30000,
                        count: 0
                    },
                    {
                        img: 'http://img.alicdn.com/imgextra/i2/1991878393/O1CN01Gj6IBY2Bs2eVrpcGO_!!1991878393.jpg_760x760.jpg',
                        title: '结婚生娃',
                        spec: '1kg',

                        price: '6.00',
                        orig: '7.00',
                        stock: 30000,
                        count: 0
                    },
               
                ]
        }
	},
	mounted() {
		this.bscroll = new BScroll('#zz-scroll',{
			    probeType:1,
                click: true,
                pullUpLoad: {
                threshold: 50
            }
		})
	},
  	methods: {
		  scrollToElement (el) {
      this.bscroll.scrollToElement(el)
    },
	  cli(e){
		//   console.log( e.currentTarget.dataset.idx);
		 console.log(this.$refs[e.currentTarget.dataset.idx] );
		  this.scrollToElement(this.$refs[e.currentTarget.dataset.idx])
		  
	  },
	   spaceChange () {
      this.showSpace = !this.showSpace
      this.$nextTick(() => {
        this.$refs.sticky.bindSticky()
      })
    },
					//减
					jianClick: function(e) {
						
						var idx = parseInt(e.target.dataset.idx);
						var list = this.rbars;
						var count = parseInt(list[idx].count);
						if(count <= 0) {
							count = 0;
						} else {
							list[idx].count = count - 1;
						}

						this.rbars = list;
					},
					// 加
					jiaClick: function(e) {
//						console.log(e.target.dataset.idx);
			
						var idx = parseInt(e.target.dataset.idx);
						var list = this.rbars;
						var count = parseInt(list[idx].count);
						if(count < 0) {
							count = 1;
						} else {
							list[idx].count = count + 1;
						}
						this.rbars = list;

					},
					//左边滚动栏
					lbarClick: function(e) {
						this.curIdx = e.currentTarget.dataset.idx;
						this.cCurIdx = 0;
					},
					//左边滚动栏内部分类
					lcbarClick: function(e) {
						this.cCurIdx = e.currentTarget.dataset.cidx;

					},
					//详情
					detailClick: function(e) {
//						console.log(JSON.stringify(e));
						var id = e.currentTarget.dataset.id;
						wx.navigateTo({
							url: 'detail/detail?id=' + id
						})
					},
				}
}
			
</script>

<style scoped>
.zbar{
    height: 100%;
}
.flooritem{
    height: 100%;
}
#fl{
	height: 100%;
	margin-top: .2rem
}

.l_bar {
	position: fixed;
	float: left;
	width: 25%;
	height: 100%;
	overflow: auto;
}

.litem {
	width: 100%;
    height: auto;
    background: #fff
}

.litem:last-child {
	margin-bottom: 1.50rem;
}

.pritem {
	width: 100%;
	height: 0.88rem;
	line-height: 0.88rem;
	text-align: center;

	color: #333;
	background: #eee;
	border-bottom: 1px #ddd solid;
}

.pritem.active {
	background: #d81e06;
	color: #FFF;
}

.cleftitem {
	position: relative;
	width: 100%;
	height: 0.88rem;
	line-height: 0.88rem;
	text-align: center;

	color: #666;
	border-bottom: 1px #efefef dashed;
	border-right: 1px #efefef solid;
}

.cleftitem.active {
	color: #d81e06;
	border-right: none;
}

.cleftitem:last-child {
	border: none;
}

.cleftitem.active::before {
	content: "";
	position: absolute;
	left: 0.05rem;
	width: 0.10rem;
	height: 0.30rem;
	top: 50%;
	margin-top: -0.15rem;
	color: transparent;
	background: #d81e06;
}

.r_bar {
	float: right;
	width: 75%;
	height: 100%;
	/* overflow-y: auto; */
    padding-bottom: 1rem;
    background: #fff
}

.ritem {
	width: 100%;
	height: 1.84rem;
    border-bottom: 1px #eee solid;
    display: flex;
    justify-content: space-between
}

.ritem:last-child {
	margin-bottom: 2rem;
}

.ritem_l {
	float: left;
	width: 1rem;
	height: 1rem;
}

.ritem_l img {
	width:100%;
	height: 100%;
	margin: 0.10rem;
	border-radius: 0.08rem;
}

.ritem_r {
	position: relative;
	float: left;
	width: 1.60rem;
    height: 0.84rem;
    
}

.ritem_r .title {
	width: 100%;
	margin-top: 0.80rem;

}

.ritem_r .status {
	display: flex;
	height: 0.40rem;
}

.ritem_r .status span {
	margin-right: 0.10rem;
	line-height: 0.40rem;
	padding: 0 0.10rem;

	color: #fff;
	border-radius: 0.08rem;
	background: #d81e06;
}

.ritem_r .desc {
	display: flex;
	position: absolute;
	bottom: 0.10rem;
	width: 100%;
	height: 0.50rem;
	line-height: 0.50rem;
}

.ritem_r .desc .price {
	width: 2.80rem;
	overflow: hidden;
}

.ritem_r .desc .price .pri {
	color: #d81e06;

}

.ritem_r .desc .price .orig {
	margin-left: 0.20rem;
	color: #999;

	text-decoration-line: line-through;
}

.ritem_r .desc .count {
	position: absolute;
	right: 0.10rem;
	display: flex;
	justify-content: flex-end;
	height: 0.40rem;
	margin-top: 1.05rem;
	padding-left: 0.10rem;

	background: #fff;
}

.ritem_r .desc .count .bor {
	width: 0.40rem;
	height: 0.40rem;
	line-height: 0.40rem;
	text-align: center;

	border-radius: 0.08rem;
}

.ritem_r .desc .count .jia {
	border: 1px #d81e06 solid;
	color: #d81e06;
}

.ritem_r .desc .count .jian {
	border: 1px #999 solid;
	color: #999;
}

.ritem_r .desc .count .num {
	width: 0.50rem;
	line-height: 0.40rem;
	text-align: center;

}
</style>

