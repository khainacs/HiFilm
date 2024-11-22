package com.hifilm.general.service.Impl;

import com.hifilm.general.mapper.AbstractMapper;
import com.hifilm.general.service.BaseService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;

@Service
public abstract class AbstractBaseServiceImpl<T> implements BaseService<T> {
    @Setter
    public static Object repository;

    @Setter
    public AbstractMapper mapper;

    public abstract void setRepository();

    public <T, ID> JpaRepository<T, ID> getRepositry() {
        return (JpaRepository<T, ID>) this.repository;
    }


    @Override
    public T create(T DTO) {
        setRepository();
        Object existingEntity = mapper.convertDTOToEntity(DTO);
        return (T) mapper.convertEntityToDTO(getRepositry().save(existingEntity));
    }

    @Override
    public <ID> T getByID(ID idDTO) {
        setRepository();
        return (T) mapper.convertEntityToDTO(getRepositry().findById(idDTO));
    }

    @Override
    public List<T> getAll() {
        setRepository();
        List<T> entities = (List<T>) getRepositry().findAll();
        return (List<T>) entities.stream().map((entity) -> mapper.convertEntityToDTO(entity)).toList();
    }

    @Override
    public T update(T dto) {
        setRepository();
        final Object id;
        try {
            Field idField = dto.getClass().getDeclaredField("id");
            idField.setAccessible(true);
            id = idField.get(dto);
        } catch (Exception e) {
            throw new RuntimeException("Cannot get id from DTO", e);
        }

        Object currentEntity = getRepositry().findById(id)
                .orElseThrow(() -> new RuntimeException("Entity not found with id: " + id));
        Object updatedEntity = mapper.convertDTOToEntity(dto);
        try {
            Field idField = currentEntity.getClass().getDeclaredField("id");
            idField.setAccessible(true);
            idField.set(updatedEntity, id);
        } catch (Exception e) {
            throw new RuntimeException("Cannot set id for entity", e);
        }
        return (T) mapper.convertEntityToDTO(getRepositry().save(updatedEntity));
    }
    @Override
    public <ID> boolean delete(ID idDTO) {
        setRepository();
        if (getRepositry().existsById(idDTO)){
            getRepositry().deleteById(idDTO);
            return !getRepositry().existsById(idDTO);
        }
        return false;
    }
}
