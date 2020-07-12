package admin.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import admin.VO.QualificationVO;
import admin.VO.SavingVO;
import admin.VO.Shared_SavingVO;

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
	
	public List<SavingVO> saving_list(){
		return ss.selectList("account.sav_list");
	}
	public void saving_insert(SavingVO vo) {
		ss.insert("account.sav_insert", vo);
	}
	public void saving_delete(SavingVO vo) {
		ss.delete("account.sav_delete",vo);
	}
	
	public List<Shared_SavingVO> shared_saving_list(){
		return ss.selectList("account.shas_list");
	}
	
	public void shared_saving_insert(Shared_SavingVO vo) {
		ss.insert("account.shas_insert", vo);
	}
	public void shared_saving_delete(Shared_SavingVO vo) {
		ss.delete("account.shas_delete",vo);
	}
	
}
