(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Bangking");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","80","24","233","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("안녕난 은행업무");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","12","8","64","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Back");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Bangking.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_Work.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Bangking.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
