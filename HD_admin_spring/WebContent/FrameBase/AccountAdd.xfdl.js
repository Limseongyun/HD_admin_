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


            obj = new Dataset("SavingList", this);
            obj._setContents("<ColumnInfo><Column id=\"sav_code\" type=\"INT\" size=\"256\"/><Column id=\"sav_name\" type=\"STRING\" size=\"256\"/><Column id=\"sav_interestrate\" type=\"INT\" size=\"256\"/><Column id=\"sav_online\" type=\"INT\" size=\"256\"/><Column id=\"shas_code\" type=\"INT\" size=\"256\"/><Column id=\"qua_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ProductList", this);
            obj._setContents("<ColumnInfo><Column id=\"pro_code\" type=\"INT\" size=\"256\"/><Column id=\"ins_code\" type=\"INT\" size=\"256\"/><Column id=\"sav_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Shared_Saving", this);
            obj._setContents("<ColumnInfo><Column id=\"shas_code\" type=\"INT\" size=\"256\"/><Column id=\"shas_count\" type=\"INT\" size=\"256\"/><Column id=\"shas_master\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Installment_Saving", this);
            obj._setContents("<ColumnInfo><Column id=\"ins_code\" type=\"INT\" size=\"256\"/><Column id=\"ins_name\" type=\"STRING\" size=\"256\"/><Column id=\"ins_online\" type=\"INT\" size=\"256\"/><Column id=\"ins_interestrate\" type=\"INT\" size=\"256\"/><Column id=\"ins_droprate\" type=\"INT\" size=\"256\"/><Column id=\"ins_putmoney\" type=\"INT\" size=\"256\"/><Column id=\"ins_term\" type=\"INT\" size=\"256\"/><Column id=\"shac_code\" type=\"INT\" size=\"256\"/><Column id=\"qua_code\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Shared_Challenge", this);
            obj._setContents("<ColumnInfo><Column id=\"shac_code\" type=\"INT\" size=\"256\"/><Column id=\"shac_mannum\" type=\"INT\" size=\"256\"/><Column id=\"shac_master\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","4","8","72","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Back");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","25","58","1195","622",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_border("3px dashed");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Product",this.Tab00);
            obj.set_text("Product");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("productGrid","670","40","462","491",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("1");
            obj.set_binddataset("ProductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"pro_code\"/><Cell col=\"1\" text=\"ins_code\"/><Cell col=\"2\" text=\"sav_code\"/></Band><Band id=\"body\"><Cell text=\"bind:pro_code\"/><Cell col=\"1\" text=\"bind:ins_code\"/><Cell col=\"2\" text=\"bind:sav_code\"/></Band></Format></Formats>");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Static("Static00","22","31","141","43",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("0");
            obj.set_text("pro_code");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Edit("pro_codev","186","25","159","60",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("2");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","111","141","43",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("3");
            obj.set_text("ins_code");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","189","141","43",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("4");
            obj.set_text("sav_code");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Button("Button00","257","285","145","45",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Combo("Combo00","256","420","122","43",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Button("Button01","572","11","214","22",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("7");
            obj.set_text("Button01");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Combo("ins_codev","185","103","161","45",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("8");
            obj.set_text("Combo01");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Combo("sav_codev","182","186","168","49",null,null,null,null,null,null,this.Tab00.Product.form);
            obj.set_taborder("9");
            obj.set_text("Combo02");
            this.Tab00.Product.addChild(obj.name, obj);

            obj = new Tabpage("Qualification",this.Tab00);
            obj.set_text("Qualification");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("qua_div","21","24","422","542",null,null,null,null,null,null,this.Tab00.Qualification.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.Tab00.Qualification.addChild(obj.name, obj);

            obj = new Static("Static00","30","30","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("0");
            obj.set_text("qua_code");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_codev","120","25","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("sdf","30","80","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("2");
            obj.set_text("qua_name");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_namev","120","75","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("3");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","125","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("4");
            obj.set_text("qua_maxage");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxagev","120","120","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("5");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_02","30","175","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("6");
            obj.set_text("qua_minage");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minagev","120","170","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("7");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_03","30","225","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("8");
            obj.set_text("qua_minmoney");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minmoneyv","120","220","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("9");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_04","30","275","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("10");
            obj.set_text("qua_maxmoeny");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxmoneyv","120","270","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("11");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_05","30","320","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("12");
            obj.set_text("qua_minperiod");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_minperiodv","120","315","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("13");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static00_05_00","30","365","90","20",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("14");
            obj.set_text("qua_maxperiod");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Edit("qua_maxperiodv","120","360","140","30",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("15");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Button("qua_add_btn","178","400","81","27",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("16");
            obj.set_text("등록");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Button("qua_update_btn","280","440","85","31",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("17");
            obj.set_text("수정");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Button("Button01_00","281","480","85","31",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Combo("up_qua_codev","190","440","70","32",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("19");
            obj.set_innerdataset("QualificationList");
            obj.set_codecolumn("qua_code");
            obj.set_text("Combo00");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Combo("del_qua_codev","190","483","69","32",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("20");
            obj.set_innerdataset("QualificationList");
            obj.set_codecolumn("qua_code");
            obj.set_text("Combo00");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static01","60","441","117","34",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("21");
            obj.set_text("수정할 qua_code");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Static("Static01_00","61","482","117","34",null,null,null,null,null,null,this.Tab00.Qualification.form.qua_div.form);
            obj.set_taborder("22");
            obj.set_text("삭제할 qua_code");
            this.Tab00.Qualification.form.qua_div.addChild(obj.name, obj);

            obj = new Grid("Grid00","510","60","670","500",null,null,null,null,null,null,this.Tab00.Qualification.form);
            obj.set_taborder("1");
            obj.set_border("1px dotted");
            obj.set_binddataset("QualificationList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"qua_code\"/><Cell col=\"1\" text=\"qua_name\"/><Cell col=\"2\" text=\"qua_maxage\"/><Cell col=\"3\" text=\"qua_minage\"/><Cell col=\"4\" text=\"qua_maxmoney\"/><Cell col=\"5\" text=\"qua_minmoney\"/><Cell col=\"6\" text=\"qua_maxperiod\"/><Cell col=\"7\" text=\"qua_minperiod\"/></Band><Band id=\"body\"><Cell text=\"bind:qua_code\"/><Cell col=\"1\" text=\"bind:qua_name\"/><Cell col=\"2\" text=\"bind:qua_maxage\"/><Cell col=\"3\" text=\"bind:qua_minage\"/><Cell col=\"4\" text=\"bind:qua_maxmoney\"/><Cell col=\"5\" text=\"bind:qua_minmoney\"/><Cell col=\"6\" text=\"bind:qua_maxperiod\"/><Cell col=\"7\" text=\"bind:qua_minperiod\"/></Band></Format></Formats>");
            this.Tab00.Qualification.addChild(obj.name, obj);

            obj = new Button("Button00","511","16","172","38",null,null,null,null,null,null,this.Tab00.Qualification.form);
            obj.set_taborder("2");
            obj.set_text("Qualification테이블조회하기");
            this.Tab00.Qualification.addChild(obj.name, obj);

            obj = new Tabpage("Saving",this.Tab00);
            obj.set_text("Saving");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("SavingGrid","534","30","638","268",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("0");
            obj.set_binddataset("SavingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"sav_code\"/><Cell col=\"1\" text=\"sav_name\"/><Cell col=\"2\" text=\"sav_interestrate\"/><Cell col=\"3\" text=\"sav_online\"/><Cell col=\"4\" text=\"shas_code\"/><Cell col=\"5\" text=\"qua_code\"/></Band><Band id=\"body\"><Cell text=\"bind:sav_code\"/><Cell col=\"1\" text=\"bind:sav_name\"/><Cell col=\"2\" text=\"bind:sav_interestrate\"/><Cell col=\"3\" text=\"bind:sav_online\"/><Cell col=\"4\" text=\"bind:shas_code\"/><Cell col=\"5\" text=\"bind:qua_code\"/></Band></Format></Formats>");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Static("Static00","20","31","122","21",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("1");
            obj.set_text("sav_code");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Edit("sav_codev","162","27","142","28",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("2");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Edit("sav_namev","164","65","141","27",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("3");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","69","127","18",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("4");
            obj.set_text("sav_name");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Edit("sav_interestratev","164","102","142","26",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("5");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","106","122","18",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("6");
            obj.set_text("sav_interestrate");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Edit("sav_onlinev","165","137","140","24",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("7");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Static("Static00_02","23","141","124","18",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("8");
            obj.set_text("sav_online");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Static("Static00_03","20","171","123","30",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("9");
            obj.set_text("shas_code");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Static("Static00_04","26","211","123","23",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("10");
            obj.set_text("qua_code");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Combo("qua_codev","161","210","143","29",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new CheckBox("shas_code_chk","320","173","110","28",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("12");
            obj.set_text("공유여부");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Combo("shas_codev","163","172","139","30",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("13");
            obj.set_text("Combo01");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Div("Div00","11","324","1170","258",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_border("1px dotted");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Grid("Shared_ChallengeGrid","570","27","581","213",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("Shared_Saving");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"shas_code\"/><Cell col=\"1\" text=\"shas_count\"/><Cell col=\"2\" text=\"shas_master\"/></Band><Band id=\"body\"><Cell text=\"bind:shas_code\"/><Cell col=\"1\" text=\"bind:shas_count\"/><Cell col=\"2\" text=\"bind:shas_master\"/></Band></Format></Formats>");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Static("asdf","13","30","108","19",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("shas_code");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Edit("shas_codev","144","25","132","34",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("2");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","13","75","108","19",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("shas_count");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Edit("shas_countv","144","70","132","34",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("4");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","13","120","108","19",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("shas_master");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Edit("shas_masterv","144","115","132","34",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("6");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","205","201","85","31",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","564","3","113","20",null,null,null,null,null,null,this.Tab00.Saving.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Button01");
            this.Tab00.Saving.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","340","212","95","32",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("15");
            obj.set_text("등록");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Button("Button01","535","3","108","21",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("16");
            obj.set_text("Button01");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Combo("Combo02","316","271","84","30",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("17");
            obj.set_text("Combo02");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Button("Button02","417","272","95","31",null,null,null,null,null,null,this.Tab00.Saving.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            this.Tab00.Saving.addChild(obj.name, obj);

            obj = new Tabpage("Installment_Saving",this.Tab00);
            obj.set_text("Installment_Saving");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Installment_SavingGrid","400","34","780","268",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("1");
            obj.set_binddataset("Installment_Saving");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ins_code\"/><Cell col=\"1\" text=\"ins_name\"/><Cell col=\"2\" text=\"ins_online\"/><Cell col=\"3\" text=\"ins_interestrate\"/><Cell col=\"4\" text=\"ins_droprate\"/><Cell col=\"5\" text=\"ins_putmoney\"/><Cell col=\"6\" text=\"ins_term\"/><Cell col=\"7\" text=\"shac_code\"/><Cell col=\"8\" text=\"qua_code\"/></Band><Band id=\"body\"><Cell text=\"bind:ins_code\"/><Cell col=\"1\" text=\"bind:ins_name\"/><Cell col=\"2\" text=\"bind:ins_online\"/><Cell col=\"3\" text=\"bind:ins_interestrate\"/><Cell col=\"4\" text=\"bind:ins_droprate\"/><Cell col=\"5\" text=\"bind:ins_putmoney\"/><Cell col=\"6\" text=\"bind:ins_term\"/><Cell col=\"7\" text=\"bind:shac_code\"/><Cell col=\"8\" text=\"bind:qua_code\"/></Band></Format></Formats>");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00","13","11","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("0");
            obj.set_text("ins_code");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Edit("ins_codev","109","4","68","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("2");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Edit("ins_name","110","39","68","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("3");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_00","14","46","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("4");
            obj.set_text("ins_name");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_01","15","81","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("5");
            obj.set_text("ins_online");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Edit("ins_interestratev","112","113","68","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("6");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_02","16","120","93","20",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("7");
            obj.set_text("ins_interestrate");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Edit("ins_dropratev","112","159","68","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("8");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_03","16","166","76","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("9");
            obj.set_text("ins_droprate");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Edit("ins_putmoneyv","114","199","68","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("10");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_04","18","206","84","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("11");
            obj.set_text("ins_putmoney");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Edit("ins_termv","263","6","77","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("12");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_05","185","12","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("13");
            obj.set_text("ins_term");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_06","186","46","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("14");
            obj.set_text("shac_code");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Static("Static00_07","187","117","67","19",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("15");
            obj.set_text("qua_code");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Button("Button00","611","5","105","22",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("16");
            obj.set_text("적금조회");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Button("Button02","225","183","111","20",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("17");
            obj.set_text("등록");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Combo("shac_codev","265","48","75","26",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Combo("ins_qua_codev","265","117","75","26",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("19");
            obj.set_text("Combo01");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new CheckBox("shac_code_chk","290","74","106","21",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("20");
            obj.set_text("공유여부");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Div("Div00","20","310","1102","261",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_border("1px dotted");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Grid("Shared_Challenge","440","40","646","201",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("Shared_Challenge");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"shac_code\"/><Cell col=\"1\" text=\"shac_mannum\"/><Cell col=\"2\" text=\"shac_master\"/></Band><Band id=\"body\"><Cell text=\"bind:shac_code\"/><Cell col=\"1\" text=\"bind:shac_mannum\"/><Cell col=\"2\" text=\"bind:shac_master\"/></Band></Format></Formats>");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","23","30","102","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("shac_code");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Edit("shac_codev","141","25","119","35",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("2");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Edit("shac_mannumv","141","73","119","35",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("3");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","23","78","102","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("shac_mannum");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Edit("shac_masterv","141","115","119","35",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("5");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","23","120","102","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("shac_master");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","445","6","209","28",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","201","174","136","36",null,null,null,null,null,null,this.Tab00.Installment_Saving.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Button01");
            this.Tab00.Installment_Saving.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","287","259","91","29",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("22");
            obj.set_text("삭제");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new Combo("Combo02","194","260","83","30",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("23");
            obj.set_text("Combo02");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

            obj = new CheckBox("ins_online_chk","110","78","70","27",null,null,null,null,null,null,this.Tab00.Installment_Saving.form);
            obj.set_taborder("24");
            obj.set_text("CheckBox01");
            this.Tab00.Installment_Saving.addChild(obj.name, obj);

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
        	var url = "http://192.168.0.122:8080/HD_admin_spring/qualification_list";
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
        	var del_qua_codev=this.Tab00.Qualification.form.qua_div.form.del_qua_codev.value
        	var id="qualificationinsert";
        	var url = "http://192.168.0.122:8080/HD_admin_spring/qualification_delete?qua_code="+del_qua_codev;
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
        	var qua_namev=this.Tab00.Qualification.form.qua_div.form.qua_namev.value
        	var qua_maxagev=this.Tab00.Qualification.form.qua_div.form.qua_maxagev.value
        	var qua_minagev=this.Tab00.Qualification.form.qua_div.form.qua_minagev.value
        	var qua_minmoneyv=this.Tab00.Qualification.form.qua_div.form.qua_minmoneyv.value
        	var qua_maxmoneyv=this.Tab00.Qualification.form.qua_div.form.qua_maxmoneyv.value
        	var qua_minperiodv=this.Tab00.Qualification.form.qua_div.form.qua_minperiodv.value
        	var qua_maxperiodv=this.Tab00.Qualification.form.qua_div.form.qua_maxperiodv.value

        	var add_btn_textv=this.Tab00.Qualification.form.qua_div.form.qua_add_btn.text
        	if (add_btn_textv=='수정'){




        		this.Tab00.Qualification.form.qua_div.form.qua_add_btn.set_text('등록')
        	}
        	var id="qualificationinsert";
        	var url = "http://192.168.0.122:8080/HD_admin_spring/qualification_insert?qua_name="+qua_namev+"&qua_maxage="+qua_maxagev+"&qua_minage="+qua_minagev+"&qua_minmoney="+qua_minmoneyv+"&qua_maxmoney="+qua_maxmoneyv+"&qua_minperiod="+qua_minperiodv+"&qua_maxperiod="+qua_maxperiodv;
        	var reqDs = "";
        	var respDs="";
        	var args = "";
        	var callback ="received";
        	this.transaction(id,url,reqDs,respDs,args,callback);
        	this.received=function(id,code,message)
        	{
        		alert(id+","+code+","+message);
        	};
        	this.Tab00.Qualification.form.qua_div.form.qua_codev.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_namev.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_maxagev.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_minagev.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_minmoneyv.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_maxmoneyv.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_minperiodv.set_value('');
        	this.Tab00.Qualification.form.qua_div.form.qua_maxperiodv.set_value('');



        };

        this.Tab00_Qualification_qua_div_qua_update_btn_onclick = function(obj,e)
        {




        	up_qua_codev=this.Tab00.Qualification.form.qua_div.form.up_qua_codev.value
        	//this.alert(up_qua_codev)
        	if (up_qua_codev ==null){
        	}else{
        	ds_qua_code=this.Tab00.Qualification.form.Grid00.getr
        	this.alert(ds_qua_code)




        	this.Tab00.Qualification.form.qua_div.form.qua_add_btn.set_text('수정')
        	this.Tab00.Qualification.form.qua_div.form.qua_codev.set_value()






        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Tab00.Product.form.Static00.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Product.form.Static00_00.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Product.form.Static00_01.addEventHandler("onclick",this.Tab00_Product_Static00_onclick,this);
            this.Tab00.Qualification.form.qua_div.form.qua_add_btn.addEventHandler("onclick",this.qua_div_qua_insert_onclick,this);
            this.Tab00.Qualification.form.qua_div.form.qua_update_btn.addEventHandler("onclick",this.Tab00_Qualification_qua_div_qua_update_btn_onclick,this);
            this.Tab00.Qualification.form.qua_div.form.Button01_00.addEventHandler("onclick",this.qua_div_qua_delete_onclick,this);
            this.Tab00.Qualification.form.Button00.addEventHandler("onclick",this.qua_div_qualification_list,this);
        };

        this.loadIncludeScript("AccountAdd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
