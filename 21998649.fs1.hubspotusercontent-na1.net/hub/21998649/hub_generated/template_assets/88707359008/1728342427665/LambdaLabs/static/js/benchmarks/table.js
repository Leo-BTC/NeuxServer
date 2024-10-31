function get_column_names(framework){var def_columns=[];return framework.includes("pytorch")?def_columns=[{className:"details-control",orderable:!1,data:"name_gpu",title:"Configuration",defaultContent:""},{data:"num_gpu",title:"num_gpu",className:"dt-right",width:"10px",visible:!1,searchable:!1},{data:"ssd",title:"ssd",className:"dt-right",width:"500px"},{data:"resnet50",title:"resnet50",className:"dt-right",width:"500px"},{data:"gnmt",title:"gnmt",className:"dt-right",width:"500px"},{data:"tacotron2",title:"tacotron2",className:"dt-right",width:"500px"},{data:"waveglow",title:"waveglow",className:"dt-right",width:"500px"},{data:"bert_base_squad",title:"bert_base_squad",className:"dt-right",width:"500px"},{data:"bert_large_squad",title:"bert_large_squad",className:"dt-right",width:"500px"}]:"tf"==framework?def_columns=[{className:"details-control",orderable:!1,data:"name_gpu",title:"Configuration",defaultContent:""},{data:"num_gpu",title:"num_gpu",className:"dt-right",width:"10px",visible:!1,searchable:!1},{data:"resnet50",title:"resnet50",className:"dt-right",width:"500px"},{data:"resnet152",title:"resnet152",className:"dt-right",width:"500px"},{data:"inception3",title:"inception3",className:"dt-right",width:"500px"},{data:"inception4",title:"inception4",className:"dt-right",width:"500px"},{data:"alexnet",title:"alexnet",className:"dt-right",width:"500px"},{data:"vgg16",title:"vgg16",className:"dt-right",width:"500px"}]:"yolov5"==framework&&(def_columns=[{className:"details-control",orderable:!1,data:"name_gpu",title:"Configuration",defaultContent:""},{data:"YOLOv5l",title:"YOLOv5l",className:"dt-right",width:"500px"},{data:"YOLOv5l6",title:"YOLOv5l6",className:"dt-right",width:"500px"},{data:"YOLOv5m",title:"YOLOv5m",className:"dt-right",width:"500px"},{data:"YOLOv5m6",title:"YOLOv5m6",className:"dt-right",width:"500px"},{data:"YOLOv5n",title:"YOLOv5n",className:"dt-right",width:"500px"},{data:"YOLOv5n6",title:"YOLOv5n6",className:"dt-right",width:"500px"},{data:"YOLOv5s",title:"YOLOv5s",className:"dt-right",width:"500px"},{data:"YOLOv5s6",title:"YOLOv5s6",className:"dt-right",width:"500px"},{data:"YOLOv5x",title:"YOLOv5x",className:"dt-right",width:"500px"},{data:"YOLOv5x6TTA",title:"YOLOv5x6TTA",className:"dt-right",width:"500px"}]),def_columns}function create_nav_buttons(framework,curTable){$("#"+framework+"_btn-example-load-more").on("click",(function(){curTable.page.loadMore(),$("#"+framework+"_btn-example-load-more").toggle(curTable.page.hasMore())}))}async function build_table(framework,mode){var def_columns=get_column_names(framework),selected=get_dropdowns(framework),metric=selected.Metric;if(framework.includes("pytorch"))if("throughput"==metric||"throughput/watt"==metric||"throughput/$"==metric)var searchable_metric="throughput";else searchable_metric="bs";else searchable_metric="latency";if(framework.includes("pytorch"))var data_table=await get_data(framework,mode,searchable_metric,selected.Precision);else if("yolov5"==framework)data_table=await get_data(framework,mode,searchable_metric,selected.Methods);data_table=$.grep(data_table,(function(n,i){var select=!0;return-1!==selected.NUM_GPU&&(select=n.num_gpu===selected.NUM_GPU),select})),"throughput/watt"==metric||"bs/watt"==metric?data_table.forEach((function(item,index){for(let key in item)"num_gpu"!=key&&"name_gpu"!=key&&"watt"!=key&&"price"!=key&&(item[key]=(item[key]/item.watt).toFixed(4))})):"throughput/$"!=metric&&"bs/$"!=metric||data_table.forEach((function(item,index){for(let key in item)"num_gpu"!=key&&"name_gpu"!=key&&"watt"!=key&&"price"!=key&&(item[key]=(item[key]/item.price).toFixed(6))}));var curTable=$("#"+framework+"_leaderboard").DataTable({dom:"frt",data:data_table,destroy:!0,autoWidth:!1,columns:def_columns,stripeClasses:["bg-white","bg-gray-50"],pageLength:20,responsive:!0,search:{regex:!0},language:{search:"_INPUT_",searchPlaceholder:"Search GPUs...         "}});"All Models"!=selected.Models&&curTable.columns().eq(0).each((function(index){index>1&&curTable.column(index).header().textContent!=selected.Models&&curTable.column(index).visible(!1)})),$("#"+framework+"_btn-example-load-more").toggle(curTable.page.hasMore()),create_nav_buttons(framework,curTable)}
//# sourceURL=21998649.fs1.hubspotusercontent-na1.net/hub/21998649/hub_generated/template_assets/88707359008/1728342427665/LambdaLabs/static/js/benchmarks/table.js