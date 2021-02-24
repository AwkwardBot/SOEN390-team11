package com.soen390.team11.repository;

import com.soen390.team11.entity.PartInventory;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PartInventoryRepository extends CrudRepository<PartInventory, Long> {

    @Modifying(clearAutomatically = true)
    @Query("UPDATE part_inventory pi SET pi.quantity = :quantity WHERE pi.id = :id")
    void updateInventory(@Param("id") Long id, @Param("quantity") int newQuantity);
}
