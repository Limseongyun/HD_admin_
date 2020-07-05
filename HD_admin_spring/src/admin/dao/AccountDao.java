package admin.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import admin.VO.QualificationVO;

@Repository
public class AccountDao {
	@Autowired
	private SqlSessionTemplate ss;
	
	public List<QualificationVO> qualification_List(){
		return ss.selectList("account.qua_list");
	}
	public void qualification_insert(QualificationVO vo) {
		ss.insert("account.qua_insert", vo);
	}
	public void qualification_delete(QualificationVO vo) {
		ss.delete("account.qua_delete",vo);
	}
}
