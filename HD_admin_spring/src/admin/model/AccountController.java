package admin.model;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.datatype.DataType;

import admin.VO.QualificationVO;
import admin.dao.AccountDao;

@Controller
public class AccountController {
	
	Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private AccountDao accountdao;
	
	
	@RequestMapping("/qualification_list")
	public ModelAndView Qualification_List() {
		ModelAndView mav = new ModelAndView("push");
		List<QualificationVO> qua_list= accountdao.qualification_List();
		DataSet ds = new DataSet("ar");
		
		ds.addColumn("qua_code", DataTypes.INT,10);
		ds.addColumn("qua_name", DataTypes.STRING,50);
		ds.addColumn("qua_maxage", DataTypes.INT,10);
		ds.addColumn("qua_minage", DataTypes.INT,10);
		ds.addColumn("qua_minmoney", DataTypes.INT,10);
		ds.addColumn("qua_maxmoney", DataTypes.INT,10);
		ds.addColumn("qua_minperiod", DataTypes.INT,10);
		ds.addColumn("qua_maxperiod", DataTypes.INT,10);
		
		for(QualificationVO e : qua_list) {
			int row =ds.newRow();
			ds.set(row, "qua_code", e.getQua_code());
			ds.set(row, "qua_name", e.getQua_name());
			ds.set(row, "qua_maxage", e.getQua_maxage());
			ds.set(row, "qua_minage", e.getQua_minage());
			ds.set(row, "qua_minmoney", e.getQua_minmoney());
			ds.set(row, "qua_maxmoney", e.getQua_maxmoney());
			ds.set(row, "qua_minperiod", e.getQua_minperiod());
			ds.set(row, "qua_maxperiod", e.getQua_maxperiod());
			
		}
		mav.addObject("ds", ds);
		
		return mav;
	}
	
	@RequestMapping("/qualification_insert")
	public ModelAndView qualification_insert(QualificationVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
		logger.info(vo.getQua_name());
		accountdao.qualification_insert(vo);
		return mav;
	}
	
	@RequestMapping("/qualification_delete")
	public ModelAndView qualification_delete(QualificationVO vo) {
		ModelAndView mav = new ModelAndView("redirect:/");
		logger.info("삭제할 값은 :"+vo.getQua_code());
		accountdao.qualification_delete(vo);
		return mav;
	}
	
}
