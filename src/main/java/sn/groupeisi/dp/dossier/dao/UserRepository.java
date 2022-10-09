package sn.groupeisi.dp.dossier.dao;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import sn.groupeisi.dp.domain.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    
}
