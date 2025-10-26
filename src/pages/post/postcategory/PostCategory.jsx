import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const categories = [
  { name: "전체", path: "/main/post/all" },
  { name: "학습", path: "/main/post/study" },
  { name: "건강", path: "/main/post/health" },
  { name: "소셜", path: "/main/post/social" },
  { name: "취미", path: "/main/post/hobbies" },
  { name: "생활", path: "/main/post/life-style" },
  { name: "루키", path: "/main/post/rookie" },
];

const filters = [
  { value: "latest", label: "최신순" },
  { value: "view", label: "조회순" },
  { value: "comment", label: "댓글순" },
  { value: "popular", label: "좋아요순" },
];

const PostCategory = () => {
  const [activeCat, setActiveCat] = useState("전체");
  const [filter, setFilter] = useState("latest");

  return (
    <S.TopBar>
      {/* === 카테고리 (Link 기반) === */}
      <S.CategoryList>
        {categories.map((c) => (
          <S.CategoryLink
            key={c.name}
            to={c.path}
            $active={activeCat === c.name}
            onClick={() => setActiveCat(c.name)}
          >
            {c.name}
          </S.CategoryLink>
        ))}
      </S.CategoryList>

      {/* === 드롭다운 === */}
      <S.FilterBox>
        <S.FilterSelect
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {filters.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </S.FilterSelect>
      </S.FilterBox>
    </S.TopBar>
  );
};

export default PostCategory;
