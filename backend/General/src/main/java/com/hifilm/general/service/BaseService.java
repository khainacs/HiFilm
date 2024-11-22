package com.hifilm.general.service;

import java.util.List;

public interface BaseService<T> {
    T create(T DTO);
    <ID> T getByID(ID idDTO);
    List<T> getAll();
    T update(T DTO);
    <ID> boolean delete(ID idDTO);
}