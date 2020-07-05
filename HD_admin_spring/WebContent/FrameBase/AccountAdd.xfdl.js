(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AccountAdd");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("QualificationList", this);
            obj._setContents("<ColumnInfo><Column id=\"qua_code\" type=\"INT\" size=\"256\" sumtext=\"\"/><Column id=\"qua_name\" type=\"STRING\" size=\"256\"/><Column id=\"qua_maxage\" type=\"INT\" size=\"256\"/><Column id=\"qua_minage\" type=\"INT\" size=\"256\"/><Column id=\"qua_maxmoney\" type=\"INT\" size=\"256\"/><Column id=\"qua_minmoney\" type=\"INT\" size=\"256\"/><Column id=\"qua_maxperiod\" type=\"INT\" size=\"256\"/><Column id=\"qua_minperiod\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","4","8","72","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Back");
            this.addChild(obj.name, obj);

            obj = new Div("qua_div","92","10","1156","203",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","497","30","656","162",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("0");
            obj.set_binddataset("QualificationList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"qua_code\"/><Cell col=\"1\" text=\"qua_name\"/><Cell col=\"2\" text=\"qua_maxage\"/><Cell col=\"3\" text=\"qua_minage\"/><Cell col=\"4\" text=\"qua_maxmoney\"/><Cell col=\"5\" text=\"qua_minmoney\"/><Cell col=\"6\" text=\"qua_maxperiod\"/><Cell col=\"7\" text=\"qua_minperiod\"/></Band><Band id=\"body\"><Cell text=\"bind:qua_code\"/><Cell col=\"1\" text=\"bind:qua_name\"/><Cell col=\"2\" text=\"bind:qua_maxage\"/><Cell col=\"3\" text=\"bind:qua_minage\"/><Cell col=\"4\" text=\"bind:qua_maxmoney\"/><Cell col=\"5\" text=\"bind:qua_minmoney\"/><Cell col=\"6\" text=\"bind:qua_maxperiod\"/><Cell col=\"7\" text=\"bind:qua_minperiod\"/></Band></Format></Formats>");
            this.qua_div.addChild(obj.name, obj);

            obj = new Button("qualification_list","513","2","133","26",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("1");
            obj.set_text("자격조건 조회");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00","80","17","72","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("2");
            obj.set_text("qua_name");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_namev","160","13","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("3");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_00","72","58","72","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("4");
            obj.set_text("qua_maxage");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxagev","160","55","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("5");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_01","72","99","72","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("6");
            obj.set_text("qua_minage");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minagev","160","94","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("7");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_02","280","12","100","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("8");
            obj.set_text("qua_maxmoney");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxmoneyv","388","13","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("9");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_03","285","60","90","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("10");
            obj.set_text("qua_minperiod");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minperiodv","388","55","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("11");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_04","280","101","90","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("12");
            obj.set_text("qua_maxperiod");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxperiodv","388","96","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("13");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_05","54","140","90","24",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("14");
            obj.set_text("qua_minmoney");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minmoneyv","160","135","92","35",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("15");
            this.qua_div.addChild(obj.name, obj);

            obj = new Button("qua_insert","360","149","80","31",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("16");
            obj.set_text("입력");
            this.qua_div.addChild(obj.name, obj);

            obj = new Button("qua_delete","1040","0","100","26",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("17");
            obj.set_text("자격조건삭제");
            this.qua_div.addChild(obj.name, obj);

            obj = new Static("Static01","873","1","97","27",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("18");
            obj.set_text("삭제할qua_code:");
            this.qua_div.addChild(obj.name, obj);

            obj = new Edit("del_qua_codev","978","5","51","21",null,null,null,null,null,null,this.qua_div.form);
            obj.set_taborder("19");
            this.qua_div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AccountAdd.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Work.xfdl");
        };

        this.qua_div_qualification_list = function(obj,e)
        {
        	var id="qualificationlist";
        	var url = "http://192.168.25.14:8100/HD_admin_spring/qualification_list";
        	var reqDs = "";
        	var respDs="QualificationList=ar";
        	var args ="";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		alert(id+","+code+","+message);
        	};
        };



        this.qua_div_qua_delete_onclick = function(obj,e)
        {
        	var del_qua_codev=this.qua_div.form.del_qua_codev.value
        	var id="qualificationinsert";
        	var url = "http://192.168.25.14:8100/HD_admin_spring/qualification_delete?qua_code="+del_qua_codev;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		alert(id+","+code+","+message);
        	};
        };

        this.qua_div_qua_insert_onclick = function(obj,e)
        {
        	var qua_namev=this.qua_div.form.qua_namev.value
        	var qua_maxagev=this.qua_div.form.qua_maxagev.value
        	var qua_minagev=this.qua_div.form.qua_minagev.value
        	var qua_minmoneyv=this.qua_div.form.qua_minmoneyv.value
        	var qua_maxmoneyv=this.qua_div.form.qua_maxmoneyv.value
        	var qua_minperiodv=this.qua_div.form.qua_minperiodv.value
        	var qua_maxperiodv=this.qua_div.form.qua_maxperiodv.value
        	this.alert(qua_namev+","+qua_maxagev+","+qua_minagev
        				+","+qua_minmoneyv+","+qua_maxmoneyv+","+qua_minperiodv
        				+","+qua_maxperiodv)
        	var id="qualificationinsert";
        	var url = "http://192.168.25.14:8100/HD_admin_spring/qualification_insert?qua_name="+qua_namev+"&qua_maxage="+qua_maxagev+"&qua_minage="+qua_minagev+"&qua_minmoney="+qua_minmoneyv+"&qua_maxmoney="+qua_maxmoneyv+"&qua_minperiod="+qua_minperiodv+"&qua_maxperiod="+qua_maxperiodv;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		alert(id+","+code+","+message);
        	};

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.qua_div.form.qualification_list.addEventHandler("onclick",this.qua_div_qualification_list,this);
            this.qua_div.form.qua_minmoneyv.addEventHandler("onchanged",this.Common_onchanged,this);
            this.qua_div.form.qua_insert.addEventHandler("onclick",this.qua_div_qua_insert_onclick,this);
            this.qua_div.form.qua_delete.addEventHandler("onclick",this.qua_div_qua_delete_onclick,this);
        };

        this.loadIncludeScript("AccountAdd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
