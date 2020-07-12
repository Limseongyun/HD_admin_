(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","50","40","280","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계좌 추가로 이동하기(예금,적금,자격조건)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","48","148","292","86",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계좌설정 이동하기(계좌상세페이지)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","48","264","293","102",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("은행업무페이지 이동하기");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","356","40","224","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프로덕트추가및 계좌수정 으로 이동하기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	 this.go("FrameBase::AccountAdd.xfdl");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.go("FrameBase::AccountSet.xfdl");
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.go("FrameBase::Bangking.xfdl");
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.go("FrameBase::ProductAdd.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
